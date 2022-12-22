import {
  Image,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { COLORS, FONTS, SHADOWS } from "../utils/fonts";
import images from "../assets";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import Input from "../components/Input";
import { useState } from "react";
const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <KeyboardAvoidingView>
        {/* <Text style={styles.text}>Log in</Text> */}
        <View
          style={{
            backgroundColor: "#3F0331",
            height: "60%",
            justifyContent: "center",
            alignItems: "center",
            borderBottomLeftRadius: 44,
            borderBottomRightRadius: 44,
          }}
        >
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              backgroundColor: "#FFE7F5",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={images.logo2}
              style={styles.img2}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              fontFamily: FONTS.MulishBold,
              fontSize: 29,
              color: "#fff",
              marginTop: 50,
            }}
          >
            Create Account
          </Text>
        </View>
        <View style={styles.inputsContainer}>
          <Input
            placeholder="Phone Number"
            value={email}
            type="numeric"
            onchange={setEmail}
          />

          <View style={styles.button}>
            <Button text="Next" backgroundColor={"#D20C83"} />
            <Text style={[styles.forgotten_password]}>
              Already have an account?{" "}
              <Text
                style={{ color: "#D20C83" }}
                onPress={() => navigation.navigate("Login")}
              >
                Login
              </Text>
            </Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFE7F5",
    height: "100%",
  },
  inputsContainer: {
    backgroundColor: "#fff",
    marginTop: -50,
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 20,
    // marginRight: 30,
    marginHorizontal: 30,
  },
  forgotten_password: {
    textTransform: "capitalize",
    fontFamily: FONTS.MulishBold,
    marginTop: 15,
    fontSize: 12,
    color: "#D20C83",
    textAlign: "left",
    color: "#3F3F3F",
    ...SHADOWS.light,
  },
  button: {
    width: "100%",
    marginTop: 40,
  },
  text: {
    fontFamily: FONTS.LatoBold,
    color: "#822E6F",
    fontSize: 25,
  },

  img2: {
    height: 70,
  },
});
export default SignUp;
