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

import { Loader } from "../components";
import useAlert from "../components/Alert";
import { useDispatch } from "react-redux";
import { getUserDetails } from "../store/reducers/authReducer";
import { useLoginMutation } from "../store/api/authSlice";
const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const { showAlert } = useAlert();
  const [login, { isLoading }] = useLoginMutation();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid Email")
      .required("Email is required"),

    password: Yup.string().required("Enter your password"),
  });
  const submitForm = async (values, onSubmitProps) => {
    const { email, password } = values;
    const { data, error } = await login({
      email_or_username: email,
      password,
    });
    if (error) {
      showAlert(error.data?.message);
    }
    if (data) {
      showAlert("Login Successful");
      dispatch(getUserDetails(data));
      navigation.navigate("Home");
    }
  };
  return (
    <>
      {isLoading && <Loader />}
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
    </>
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
