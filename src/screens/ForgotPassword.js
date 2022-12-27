import {
  Text,
  StatusBar,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import images from "~/assets";
import { FONTS, SHADOWS } from "~/utils/fonts";
import { Button, Input } from "~/components";
import { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useForgotPasswordMutation } from "../store/api/authSlice";
import useAlert from "../components/Alert";
import { Loader } from "../components";

const ForgotPassword = ({ navigation }) => {
  const [confirmMail, { isLoading }] = useForgotPasswordMutation();
  const { showAlert } = useAlert();
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter a valid Email")
      .required("Enter First Name")
      .required(),
  });
  const submitForm = async (values, onSubmitProps) => {
    const { email } = values;
    const { data, error } = await confirmMail({ email });
    console.log(data);
    if (error || error?.originalStatus === 500) {
      showAlert("Email not Valid");
    }
    if (data) {
      showAlert(data?.message);
      navigation.replace("ConfirmEmail", { email });
    }
    onSubmitProps.resetForm();
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <View style={styles.image1} />
      <View style={styles.image2} />
      {isLoading && <Loader />}
      <View>
        <Text style={styles.text}>Forgot password</Text>
        <Text style={styles.text2}>
          Enter the email address associated with your account and we’ll send
          you a mail with instructions to reset your password
        </Text>
      </View>
      <Formik
        validationSchema={validationSchema}
        initialValues={{ email: "" }}
        onSubmit={submitForm}
        validateOnMount={false}
      >
        {({ handleSubmit }) => (
          <View style={styles.inputsContainer}>
            <Input
              properties={{ placeholder: "Enter Your Email Address" }}
              name="email"
            />

            <View style={styles.button}>
              <Button
                text="Confirm Email"
                handlePress={handleSubmit}
                backgroundColor={"#D20C83"}
              />
            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.MulishBold,
    fontSize: 25,
    color: "#842D71",
    lineHeight: 36,
    letterSpacing: -0.140625,
    textAlign: "center",
  },
  text2: {
    color: "#828282",
    fontSize: 15,
    fontFamily: FONTS.Mulish,
    marginTop: 10,
  },
  button: {
    marginTop: 20,
  },
  container: {
    flex: 1,
    paddingVertical: 150,
    paddingHorizontal: 30,
    backgroundColor: "#FFE7F5",
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
    left: -256,
    backgroundColor: "#FFECFB",
    borderRadius: 240,
    borderBottomEndRadius: 400,
  },
  forgotten_password: {
    textAlign: "right",
    textTransform: "capitalize",
    fontFamily: FONTS.MulishBold,
    marginTop: 10,
    fontSize: 12,
    color: "#D20C83",
  },
  inputsContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 20,
    marginTop: 80,
    // marginHorizontal: 30,
    ...SHADOWS.light,
  },
});

export default ForgotPassword;
