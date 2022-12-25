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
import { Formik } from "formik";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import * as Yup from "yup";
const Login = ({ navigation }) => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid Email")
      .required("Email is required"),

    password: Yup.string()
      .required("Enter your password")
      .min(8, "password too short")
      .matches(/^(?=.*[a-z])/, "Must contain at least one lowercase character")
      .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character")
      .matches(/^(?=.*[0-9])/, "Must contain at least one number")
      .matches(/^(?=.*[!@#%&])/, "Must contain at least one special character"),
    // .matches()
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    // ),
  });
  const submitForm = (values, onSubmitProps) => {
    console.log(values);
    navigation.navigate("Verify");
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <>
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
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={submitForm}
        >
          {({ isValid, isSubmitting, handleSubmit }) => (
            <View style={styles.inputsContainer}>
              <View>
                <Input
                  properties={{
                    type: "email",
                    placeholder: "Email Address",
                  }}
                  name="email"
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Input
                  properties={{
                    keyboardType: "password",
                    secureTextEntry: true,
                    placeholder: "Password",
                  }}
                  name="password"
                />

                <Text
                  style={[styles.forgotten_password, { marginBottom: 10 }]}
                  onPress={() => navigation.navigate("ForgotPassword")}
                >
                  Forgot Password?
                </Text>
              </View>

              <View style={styles.button}>
                <Button
                  text="Log in"
                  backgroundColor={"#D20C83"}
                  handlePress={handleSubmit}
                  disabled={isSubmitting && !isValid}
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
          )}
        </Formik>
      </>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFE7F5",
    height: "100%",
  },
  error: {
    color: "#FF0101",
    fontFamily: FONTS.MulishBold,
    fontSize: 12,
    marginTop: 5,
  },
  inputsContainer: {
    backgroundColor: "#fff",
    marginTop: -70,
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 20,

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
