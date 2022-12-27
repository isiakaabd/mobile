import {
  Image,
  KeyboardAvoidingView,
  StatusBar,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from "react-native";
import { COLORS, FONTS, SHADOWS } from "~/utils/fonts";
import images from "../assets";
import * as Yup from "yup";
import { Button, Input } from "~/components";
// "~/src/components";
import { Formik } from "formik";
import { useGenerateOTPMutation } from "../store/api/authSlice";
import { Loader } from "../components";
import useAlert from "../components/Alert";
import { useEffect } from "react";
import GlobalStyle from "../utils/GlobalStyle";

// import  from "../components/Input";
const SignUp = ({ navigation }) => {
  const [generateOTP, { isLoading }] = useGenerateOTPMutation();
  const { showAlert } = useAlert();
  const submitForm = async (values, onSubmitProps) => {
    const { error, data } = await generateOTP({ email: values.email });
    if (error) {
      showAlert(error?.data?.errors?.email[0]);
    }
    if (data) {
      navigation.replace("Verify", { values });
    }
    onSubmitProps.resetForm();
  };

  // ToastAndroid.show("123", ToastAndroid.LONG);
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Enter Valid Email")
      .required("Email is required"),
  });
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      {isLoading && <Loader />}
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
        <Formik
          validationSchema={validationSchema}
          initialValues={{ email: "" }}
          onSubmit={submitForm}
        >
          {({ handleSubmit }) => (
            <View style={styles.inputsContainer}>
              <Input
                properties={{
                  type: "email",
                  placeholder: "Email Address",
                }}
                name="email"
              />

              <View style={styles.button}>
                <Button
                  text="Next"
                  backgroundColor={"#D20C83"}
                  handlePress={handleSubmit}
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
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
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
