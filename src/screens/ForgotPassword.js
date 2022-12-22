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

const ForgotPassword = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />

      <View style={styles.image1} />
      <View style={styles.image2} />
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
    height: 200,
    width: 200,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    right: -100,
    zIndex: 1,
    borderRadius: 100,
    top: -100,
  },
  image2: {
    height: 592,
    width: 417,
    position: "absolute",
    top: 104,
    backgroundColor: "red",
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

export default ForgotPassword;
