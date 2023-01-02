import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
// import { FONTS,  } from "../utils/fonts";
import images from "../../assets";
import { Formik } from "formik";
import { Button, Input, ImagePickers } from "../../components";
import * as Yup from "yup";
import { FONTS, SHADOWS } from "../../utils/fonts";
import Select from "../../components/Select";

const AddFriends = ({ navigation }) => {
  const initialValues = {
    firstName: "",
    lastName: "",
    phone: "",
    userName: "",
    gender: "",
    email: "",
    birthday: "",
    image: "",
  };
  const submitForm = () => {};
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
  });
  return (
    <ScrollView>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={submitForm}
        validateOnMount={false}
      >
        {({ handleSubmit, values, errors, initialValues }) => (
          <View style={styles.container}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 60,
                  marginBottom: 25,
                  backgroundColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                  borderWidth: 4,
                  borderColor: "#fff",
                }}
              >
                <Image
                  resizeMode="contain"
                  source={images.camera}
                  style={{
                    height: 30,
                    position: "absolute",
                    bottom: 10,
                    right: -35,
                  }}
                />
                <ImagePickers />
              </View>
            </View>
            <View style={styles.inputsContainer}>
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
                <View style={{ marginTop: 20 }}>
                  <Input
                    properties={{
                      type: "email",
                      placeholder: "Email Address",
                    }}
                    name="email"
                  />
                </View>
                <View
                  style={{
                    borderBottomWidth: 2,
                    borderColor: "#D1D8E9",
                  }}
                >
                  <Select
                    placeholder="Gender"
                    name="gender"
                    options={[
                      {
                        label: "Gender",

                        value: "",
                      },
                      {
                        label: "Male",

                        value: "Male",
                      },
                      {
                        label: "Female",

                        value: "Female",
                      },
                    ]}
                  />
                </View>
              </View>
              <View style={styles.button}>
                <Button text={"Add Friend"} backgroundColor={"#D20C83"} />
              </View>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default AddFriends;
const styles = StyleSheet.create({
  container: {
    paddingVertical: 30,
    ...SHADOWS.light,
    backgroundColor: "#FCF8FA",
    height: "100%",
  },
  innerContainer: {
    // backgroundColor: "#3F0331",
    // height: "55%",
    // paddingTop: 50,
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
    // marginTop: -70,
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
