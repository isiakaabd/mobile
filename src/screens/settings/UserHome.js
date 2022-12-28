import { StyleSheet, SafeAreaView, Image, Text, View } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import images from "../../assets";
import { FONTS, SHADOWS } from "../../utils/fonts";
import { useProfileQuery } from "../../store/api/userSlice";
import { Loader } from "../../components";

const UserHome = ({ navigation }) => {
  const { data, error, isLoading } = useProfileQuery();

  if (isLoading) return <Loader />;
  const { avatar, first_name, last_name, username, date_of_birth } = data;
  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <View style={styles.top}>
          <View style={styles.semi} />
          <View>
            <View
              style={styles.settings}
              // onStartShouldSetResponder={() => navigation.navigate("Profile")}
              // onPress={() => navigation.navigate("Profile")}
            >
              <FontAwesome5
                name="home"
                size={17}
                // style={styles.settings}
                style={{ zIndex: 25 }}
                // style={[styles.settings, { borderWidth: 2, padding: 20 }]}
                color="#3F0331"
                onPress={() => navigation.navigate("Profile")}
              />
            </View>
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
        <View style={{ marginTop: 70 }}>
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
          <View>
            <Image
              source={images.calendar}
              resizeMode="contain"
              style={{ width: 20, height: 20 }}
            />
            <Text>{date_of_birth}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default UserHome;

const styles = StyleSheet.create({
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
    marginHorizontal: 30,
    height: 300,
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
