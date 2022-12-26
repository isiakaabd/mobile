import { StyleSheet, Text, Image, View } from "react-native";
import React from "react";
import { FONTS, SHADOWS } from "../utils/fonts";
import Input from "../components/Input";
import images from "../assets";
import Button from "../components/Button";
import { Formik } from "formik";
import * as Yup from "yup";
import { useForgotPasswordLinkConfirmMutation } from "../store/api";
import { Loader } from "../components";
import useAlert from "../components/Alert";
import GlobalStyle from "../utils/GlobalStyle";
import { useDispatch } from "react-redux";
import { getToken } from "../store/reducers/authReducer";
const ConfirmEmail = ({ route, navigation }) => {
  const { email } = route.params;
  const [verifyOTP, { isLoading }] = useForgotPasswordLinkConfirmMutation();
  const { showAlert } = useAlert();
  const dispatch = useDispatch();
  const validationSchema = Yup.object().shape({
    otp: Yup.string().min(5, "Enter 5 digit OTP").required("OTP is required"),
  });

  const submitForm = async (values, onSubmitProps) => {
    const { error, data } = await verifyOTP({ email, otp: values.otp });

    if (error) {
      showAlert(error?.data?.message);
    }
    if (data) {
      dispatch(getToken(data?.access_token));
      showAlert(data?.message);
      navigation.replace("ChangePassword", { email });
    }
    onSubmitProps.resetForm();
  };
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        {isLoading && <Loader />}
        <Text style={styles.textHeader}>Open mail</Text>

        <Text style={styles.text}>
          A password reset code has been sent to{" "}
          <Text style={{ color: "#842D71", fontFamily: FONTS.MulishBold }}>
            {email}
          </Text>
          . Copy and input it in the spaces below.
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.modal}>
          <View
            style={{
              height: 80,
              position: "absolute",
              width: 80,
              left: "50%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 40,
              top: -40,
              backgroundColor: "#fff",
              ...SHADOWS.light,
            }}
          >
            <Image
              source={images.image06}
              style={styles.img2}
              resizeMode="contain"
            />
          </View>
          <Formik
            validationSchema={validationSchema}
            initialValues={{ otp: "" }}
            onSubmit={submitForm}
          >
            {({ handleSubmit }) => (
              <>
                <View style={{ marginTop: 100 }}>
                  <Input
                    properties={{
                      maxLength: 5,
                      keyboardType: "numeric",
                    }}
                    name="otp"
                    style={{ fontSize: 30, letterSpacing: 20 }}
                  />
                </View>

                <View style={styles.button}>
                  <Button
                    text="Continue"
                    handlePress={handleSubmit}
                    backgroundColor={"#D20C83"}
                  />
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
              </>
            )}
          </Formik>
        </View>
      </View>
    </View>
  );
};

export default ConfirmEmail;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    paddingTop: 120,
    backgroundColor: "#FFE7F5",
    ...SHADOWS.dark,
  },
  button: {
    width: "100%",
    marginTop: 40,
  },
  textContainer: {
    paddingHorizontal: 50,
  },
  forgotten_password: {
    textTransform: "capitalize",
    fontFamily: FONTS.MulishBold,
    marginTop: 15,
    fontSize: 12,
    color: "#D20C83",
    textAlign: "left",
    color: "#3F3F3F",
  },
  img2: {
    height: 40,
  },
  modal: {
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    borderRadius: 10,
    paddingBottom: 20,
  },
  textHeader: {
    color: "#842D71",
    fontFamily: FONTS.MulishBold,
    textAlign: "center",
    fontSize: 29,
  },
  text: {
    color: "#AD5088",
    fontSize: 15,
    fontFamily: FONTS.Mulish,
    marginTop: 20,
  },
  inputContainer: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    paddingVertical: 60,
    paddingHorizontal: 30,
  },
});
