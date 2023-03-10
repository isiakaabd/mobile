import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import { FONTS, SHADOWS } from "../utils/fonts";
import images from "../assets";
import { Formik } from "formik";
import Button from "../components/Button";
import Input from "../components/Input";
import { useState } from "react";
import * as Yup from "yup";
import ImagePickers from "../components/ImagePicker";
import DatePickers from "../components/DatePickers";
import moment from "moment/moment";
import { useRegisterMutation } from "../store/api/authSlice";
import { Loader } from "../components";
import useAlert from "../components/Alert";
const Register = ({ route, navigation }) => {
  const { email } = route.params;
  const [register, data] = useRegisterMutation();
  const { showAlert } = useAlert();
  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    userName: "",
    password: "",
    confirmPassword: "",
    birthday: "",
    image: "",
  };
  const validationSchema = Yup.object().shape({
    phone: Yup.number("Must be number").required("Phone is required"),
    firstName: Yup.string()
      .required("Enter First Name")
      .required("First Name is required"),
    lastName: Yup.string()
      .required("Enter last Name")
      .required("Last Name is required"),
    userName: Yup.string()
      .required("Enter User Name")
      .required("UserName is required"),
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
    birthday: Yup.string().required("Date is required"),
  });

  const img = "https://api.cheers.global/images/profile-picture.png";
  const submitForm = async (values, onSubmitProps) => {
    const {
      firstName,
      lastName,
      phone,
      userName,
      password,
      confirmPassword,
      birthday,
      image,
    } = values;
    const date = moment(birthday).format("YYYY-MM-DD");

    const newData = {
      first_name: firstName,
      last_name: lastName,
      email,
      username: userName,
      phone,
      date_of_birth: date,
      password,
      password_confirmation: confirmPassword,
      avatar: image,
    };

    const { data, error } = await register(newData);

    const err = error?.data?.message;
    if (error) {
      showAlert(err);
    } else if (data) {
      navigation.navigate("Login");
    }
  };
  const [step, setSteps] = useState(0);
  let Title;
  switch (step) {
    case 0:
      Title = "Create Account";
      break;
    case 1:
      Title = "User Profile";
      break;
    case 2:
      Title = "Birthday";
      break;

    default:
      break;
  }
  const Step1 = () => {
    return (
      <View>
        <View>
          <Input
            properties={{
              placeholder: "First Name",
            }}
            name="firstName"
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Input
            properties={{
              placeholder: "Last Name",
            }}
            name="lastName"
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Input
            properties={{
              type: "numeric",
              placeholder: "Enter Phone Number",
            }}
            name="phone"
          />
        </View>
      </View>
    );
  };
  const Step2 = () => {
    return (
      <View>
        <View>
          <Input
            properties={{
              placeholder: "UserName",
            }}
            name="userName"
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
        </View>
        <View style={{ marginTop: 20 }}>
          <Input
            properties={{
              keyboardType: "password",
              secureTextEntry: true,
              placeholder: "Confirm Password",
            }}
            name="confirmPassword"
          />
        </View>
      </View>
    );
  };
  const Step3 = () => {
    return <DatePickers />;
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={false} />
      {data.isLoading && <Loader />}
      <>
        <View style={styles.innerContainer}>
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
            {Title}
          </Text>
        </View>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={submitForm}
          validateOnMount={false}
        >
          {({ handleSubmit, errors }) => (
            <View style={styles.inputsContainer}>
              <View
                style={{
                  height: 100,
                  position: "absolute",
                  width: 100,
                  left: "40%",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 50,
                  top: -50,
                  backgroundColor: "#fff",
                  ...SHADOWS.light,
                }}
              >
                <ImagePickers />
              </View>
              {step === 0 ? (
                <Step1 />
              ) : step === 1 ? (
                <Step2 />
              ) : step === 2 ? (
                <Step3 />
              ) : null}
              <View style={styles.button}>
                <Button
                  text={step === 2 ? "SignUp" : "Next"}
                  backgroundColor={"#D20C83"}
                  handlePress={
                    step !== 2 ? () => setSteps(step + 1) : handleSubmit
                  }
                  disabled={
                    step === 1
                      ? errors.firstName || errors.lastName || errors.phone
                      : step === 2
                      ? errors.password ||
                        errors.confirmPassword ||
                        errors.userName
                      : step === 3
                      ? errors.birthday
                      : false
                  }
                />
                <Text
                  style={[
                    styles.forgotten_password,
                    { textAlign: "left", color: "#3F3F3F" },
                  ]}
                >
                  Already have an account?
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
      </>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFE7F5",
    height: "100%",
  },
  innerContainer: {
    backgroundColor: "#3F0331",
    height: "55%",
    paddingTop: 50,
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomLeftRadius: 44,
    borderBottomRightRadius: 44,
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
export default Register;
