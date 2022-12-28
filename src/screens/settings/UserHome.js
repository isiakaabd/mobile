import {
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import images from "../../assets";
import { FONTS, SHADOWS } from "../../utils/fonts";
import { useProfileQuery } from "../../store/api/userSlice";
import { Loader } from "../../components";

const UserHome = ({ navigation }) => {
  const { data, error, isLoading } = useProfileQuery();
  const [color, setColor] = useState(false);
  if (isLoading) return <Loader />;
  const { avatar, first_name, last_name, username, date_of_birth } = data;

  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <View style={styles.top}>
          <View style={styles.semi} />
          <View>
            <Pressable
              style={[styles.settings, { zIndex: 30 }]}
              onPress={() => navigation.navigate("Settings")}
            >
              <Image
                size={17}
                source={images.setting}
                style={[{ zIndex: 25, width: 30, height: 30 }]}
                color="#3F0331"
              />
            </Pressable>
            <Image
              source={images.line3}
              resizeMode="contain"
              style={styles.image}
            />
          </View>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <View
          style={{
            position: "absolute",
            left: "31.5%",
            top: -60,
            borderTopRightRadius: 50,
            borderTopLeftRadius: 50,
            height: 60,
            width: 120,
          }}
        />
        <View style={styles.image2}>
          <Image
            source={{ uri: avatar }}
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              padding: 30,
              margin: 10,

              borderColor: "transparent",
              borderWidth: 3,
            }}
            resizeMode="contain"
          />
        </View>
        <View style={{ marginTop: 50 }}>
          <Text style={styles.text}>{`${first_name} ${last_name}`}</Text>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                backgroundColor: "#3F0331",
                borderRadius: 50,
                paddingVertical: 10,
                paddingHorizontal: 20,
                fontFamily: FONTS.MulishBold,
                fontSize: 12,
                marginTop: 20,
              }}
            >
              {`@${username}`}
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Image
              source={images.calendar}
              resizeMode="contain"
              style={{ width: 20, margin: 10, height: 20 }}
            />
            <Text
              style={{
                color: "#3F0331",
                fontSize: 14,
                fontFamily: FONTS.MulishBold,
              }}
            >
              {date_of_birth}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 30,
              marginTop: 15,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Wallet")}
              style={[
                styles.button,
                {
                  backgroundColor: "#D20C83",
                  borderColor: "#D20C83",
                  marginRight: 20,
                },
              ]}
            >
              <Image
                source={images.wallet}
                style={{
                  height: 20,
                  width: 20,
                }}
                resizeMode="contain"
              />
              <Text
                style={[
                  styles.buttonText,
                  {
                    color: "#fff",
                  },
                ]}
              >
                View Wallet
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Message")}
              style={[
                styles.button,
                {
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  borderColor: `${!color ? "#D20C83" : "#fff"}`,
                },
              ]}
            >
              <Image
                source={images.send}
                resizeMode="contain"
                style={{ height: 20, width: 20 }}
              />
              <Text style={[styles.buttonText, { color: "#D20C83" }]}>
                View Messages
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserHome;

const styles = StyleSheet.create({
  buttonText: {
    color: "#fff",
    marginLeft: 5,
    fontSize: 12,
    fontFamily: FONTS.MulishBold,
  },
  button: {
    paddingVertical: 10,

    paddingHorizontal: 10,
    borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 50,
    justifyContent: "center",
  },
  image2: {
    position: "absolute",
    left: "35%",
    top: -50,
    borderRadius: 50,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 4,
    borderColor: "#fff",
    width: 100,
    backgroundColor: "#fff",
    ...SHADOWS.light,
  },
  text: {
    color: "##3F0331",
    fontFamily: FONTS.MulishBold,
    fontSize: 18,
    textAlign: "center",
  },
  imageContainer: {
    marginTop: -50,
    borderRadius: 30,
    marginHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: "#fff",
    ...SHADOWS.medium,
  },
  container: { flex: 1 },
  top: {
    width: "100%",
    height: 230,
    backgroundColor: "#3F0331",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  image: {
    right: 0,
    top: 0,

    zIndex: 0,
    position: "absolute",
  },
  settings: {
    borderWidth: 2,
    // padding: 10,
    width: 40,
    height: 40,
    position: "absolute",
    top: 60,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    zIndex: 2,
    borderColor: "#fff",
  },

  semi: {
    height: 232,
    width: 232,
    backgroundColor: "#F0D865",
    position: "absolute",
    borderRadius: 116,
    right: "-32.09%",
    top: "-30.04%",
  },
});
