import { Image, StatusBar, StyleSheet, View } from "react-native";
import { FONTS, SHADOWS } from "../utils/fonts";
import images from "../assets";
import { Formik } from "formik";
import Button from "../components/Button";
import Input from "../components/Input";
import * as Yup from "yup";
import { useForgotPasswordLinkResetMutation } from "../store/api/authSlice";
import { Loader } from "../components";
import useAlert from "../components/Alert";
const ChangePassword = ({ navigation, route }) => {
  const { email } = route.params;
  const initialValues = {
    confirmPassword: "",
    password: "",
  };
  const { showAlert } = useAlert();
  const [reset, { isLoading }] = useForgotPasswordLinkResetMutation();
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Enter your password")
      .min(8, "password too short")
      .matches(/^(?=.*[a-z])/, "Must contain at least one lowercase character")
      .matches(/^(?=.*[A-Z])/, "Must contain at least one uppercase character")
      .matches(/^(?=.*[0-9])/, "Must contain at least one number")
      .matches(/^(?=.*[!@#%&])/, "Must contain at least one special character"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Password is required"),
  });
  const submitForm = async (values, onSubmitProps) => {
    const { confirmPassword, password } = values;
    console.log(values);
    const { data, error } = await reset({
      password_confirmation: confirmPassword,
      password,
      email,
    });
    if (error) {
      showAlert(error.data?.message);
    }
    if (data) {
      showAlert("Password reset successful, Please Login");
      navigation.navigate("Login");
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      <>
        <View
          style={{
            backgroundColor: "transparent",
            height: "50%",
            justifyContent: "center",
            alignItems: "center",
            borderBottomLeftRadius: 44,
            borderBottomRightRadius: 44,
          }}
        >
          {isLoading && <Loader />}
          <View
            style={{
              width: 100,
              height: 100,
              borderRadius: 30,
              backgroundColor: "#FFEDF8",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={images.image07}
              style={styles.img2}
              resizeMode="contain"
            />
          </View>
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
                    keyboardType: "password",
                    secureTextEntry: true,
                    placeholder: "New Password",
                  }}
                  name="password"
                />
              </View>
              <View style={{ marginTop: 20 }}>
                <Input
                  properties={{
                    keyboardType: "password",
                    secureTextEntry: true,
                    placeholder: "Password",
                  }}
                  name="confirmPassword"
                />
              </View>

              <View style={styles.button}>
                <Button
                  text="Reset Password"
                  backgroundColor={"#D20C83"}
                  handlePress={handleSubmit}
                  disabled={isSubmitting && !isValid}
                />
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
    backgroundColor: "#FCF8FA",
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
    marginTop: 30,
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
export default ChangePassword;
