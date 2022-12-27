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
import { useEffect } from "react";
<<<<<<< HEAD
import { useSelector } from "react-redux";

const Splash = ({ navigation }) => {
  const user = useSelector((state) => state?.reducer?.user);
=======

const Splash = ({ navigation }) => {
>>>>>>> ac6b9fd12829920f61efb0ce09cc071768de9498
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Main");
    }, 2000);
    //eslint-disable-next-line
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View>
        <View style={styles.image2}>
          <Image
            source={images.logo2}
            resizeMode="contain"
            style={styles.img2}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  img2: {
    height: 150,
  },
});

export default Splash;
