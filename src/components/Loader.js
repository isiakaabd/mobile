import { StyleSheet, ActivityIndicator, Image, View } from "react-native";
import { SHADOWS } from "~/utils/fonts";
import images from "../assets";
import { BlurView } from "expo-blur";

const Loader = () => {
  return (
    <View style={[styles.loader]}>
      <View style={[styles.img]}>
        <Image
          source={images.logo2}
          resizeMode="contain"
          style={{ height: 80, zIndex: 200, position: "absolute" }}
        />
        <ActivityIndicator
          animating={true}
          style={styles.indicator}
          size="large"
          color="#D20C83"
        />
        <BlurView style={{ flex: 1 }} />
      </View>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  img: {
    ...SHADOWS.dark,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    position: "absolute",
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  indicator: {
    padding: 40,
    backgroundColor: "#FFE7F5",
    borderRadius: 12,
    zIndex: 0,
  },
});
