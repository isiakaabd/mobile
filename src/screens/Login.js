import {
  Image,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, FONTS, SHADOWS } from "../utils/fonts";
import images from "../assets";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      {/* <Text style={styles.text}>Log in</Text> */}
      <View
        style={{
          backgroundColor: "#3F0331",
          height: "50%",
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
          Welcome
        </Text>
      </View>
      <View style={styles.inputsContainer}>
        <Input
          placeholder="Email Address"
          value={email}
          type="email"
          onchange={setEmail}
        />
        <View style={{ marginTop: 20 }}>
          <Input
            placeholder="Password"
            password={true}
            value={password}
            type="password"
            onchange={setPassword}
            eye={eye}
            onEyeIconClick={() => setEye(!eye)}
          />
        </View>

        <Text
          style={[styles.forgotten_password, { marginBottom: 10 }]}
          onPress={() => navigation.navigate("ForgotPassword")}
        >
          Forgot Password?
        </Text>

        <View style={styles.button}>
          <Button
            text="Log in"
            backgroundColor={"#D20C83"}
            handlePress={() => navigation.navigate("Verify")}
          />
          <Text
            style={[
              styles.forgotten_password,
              { textAlign: "left", color: "#3F3F3F" },
            ]}
          >
            DON'T HAVE AN ACCOUNT?{" "}
            <Text
              style={{ color: "#D20C83" }}
              onPress={() => navigation.navigate("SignUp")}
            >
              SIGN UP
            </Text>
          </Text>
        </View>
      </View>
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
    marginTop: -70,
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 20,
    // marginRight: 30,
    marginHorizontal: 30,
    ...SHADOWS.light,
  },
  forgotten_password: {
    textAlign: "right",
    textTransform: "capitalize",
    fontFamily: FONTS.MulishBold,
    marginTop: 10,
    fontSize: 12,
    color: "#D20C83",
  },
  button: {
    width: "100%",
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
export default Login;
