import {
  Text,
  StatusBar,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import images from "../assets";
import { FONTS } from "../utils/fonts";
import Button from "../components/Button";

const Main = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View>
        <View style={styles.image1} />
        <View style={styles.image2}>
          <Image
            source={images.image04}
            resizeMode="contain"
            style={styles.img2}
          />
        </View>
        <View style={styles.image3}>
          <Image
            source={images.image02}
            resizeMode="cover"
            style={styles.img3}
          />
        </View>
        <View style={styles.image4}>
          <Image
            source={images.image01}
            resizeMode="contain"
            style={styles.img4}
          />
        </View>
        <View style={styles.image5}>
          <Image
            source={images.image03}
            resizeMode="contain"
            style={styles.img4}
          />
        </View>
        <View style={styles.image6}>
          <Image
            source={images.image05}
            resizeMode="contain"
            style={styles.img4}
          />
        </View>
      </View>
      <View style={styles.textContainer}>
        <View style={{ width: "100%", alignItems: "center" }}>
          <Image
            source={images.cheers}
            resizeMode="contain"
            style={{ width: "100%" }}
          />
        </View>
        <View style={{ paddingHorizontal: 39 }}>
          <Text style={styles.smile}>
            Put a smile on the faces of your loved ones on their birthdays
          </Text>
        </View>
        <View style={{ paddingHorizontal: 57, marginTop: 14 }}>
          <Button
            text="Get started"
            backgroundColor="#D20C83"
            handlePress={() => navigation.navigate("SignUp")}
          />
          <Button
            text="Log in"
            backgroundColor="rgba(255, 255, 255, 0.2)"
            handlePress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  smile: {
    fontSize: 18,
    fontFamily: FONTS.MulishBold,
    color: "#CF93C1",
    textAlign: "center",
  },
  img2: {
    height: 80,
  },
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#3F0331",
  },
  textContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  image1: {
    height: 97,
    width: 97,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    right: -48,
    zIndex: 1,
    borderRadius: 97 / 2,
    top: -48,
  },
  img3: {
    height: 80,
    width: 80,
    position: "absolute",
    top: -12,
    // backgroundColor: "red",
  },
  image2: {
    backgroundColor: "#DB1CA6",
    height: 100,
    justifyContent: "flex-end",
    alignItems: "center",
    width: 100,
    position: "absolute",
    borderRadius: 100 / 2,
    left: -15,
    top: -20,
  },
  image3: {
    backgroundColor: "#F0D865",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    // padding: 10,
    position: "absolute",
    borderRadius: 35,
    left: 140,
    top: 60,
  },
  image4: {
    backgroundColor: "#FFF",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    // padding: 10,
    position: "absolute",
    borderRadius: 40,
    right: 5,
    top: 120,
  },
  image5: {
    backgroundColor: "#DB1CA6",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    // padding: 10,
    position: "absolute",
    borderRadius: 100 / 2,
    left: 46,
    top: 180,
  },
  image6: {
    backgroundColor: "transparent",
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    position: "absolute",
    borderRadius: 35,
    right: 88,
    top: 250,
  },
  imageContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFE7F5",
  },
  image: {
    zIndex: 1,
    height: 80,
    // height: 96,
    width: 80,
  },
  text: {
    fontFamily: FONTS.LatoBold,
    fontSize: 30,
  },
});

export default Main;
