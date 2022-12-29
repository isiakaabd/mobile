import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useProfileQuery } from "../../store/api/userSlice";
import * as Yup from "yup";
import { Formik } from "formik";
import { Input, Button } from "../../components";
import images from "../../assets";
const EditProfile = () => {
  const { data } = useProfileQuery();
  const { first_name, date_of_birth, last_name, email, username, phone } = data;
  const initialValues = {
    firstName: first_name,
    lastName: last_name,
    userName: username,
    phone,
    email,
    birthday: date_of_birth,
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Must be a valid Email")
      .required("Email is required"),

    password: Yup.string().required("Enter your password"),
  });
  const submitForm = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View>
          <Image style={styles.image} source={{ uri: data?.avatar }} />
          <Image
            source={images.camera}
            style={{
              position: "absolute",
              width: 30,
              height: 30,
              bottom: 20,
              right: 0,
            }}
          />
        </View>
      </View>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={submitForm}
        enableReinitialize
      >
        {({ isValid, isSubmitting, handleSubmit }) => (
          <View style={styles.inputContainer}>
            <Input
              style={styles.padding}
              properties={{
                placeholder: "First Name",
              }}
              name="firstName"
            />
            <Input
              properties={{
                placeholder: "Last Name",
              }}
              style={styles.padding}
              name="lastName"
            />
            <Input
              style={styles.padding}
              properties={{
                placeholder: "User Name",
              }}
              name="userName"
            />
            <Input
              style={styles.padding}
              properties={{
                type: "email",
                placeholder: "Phone Number",
              }}
              name="phone"
            />
            <Input
              style={styles.padding}
              properties={{
                placeholder: "Date of Birth",
              }}
              name="birthday"
            />
            <Input
              style={styles.padding}
              properties={{
                type: "email",
                placeholder: "Email Address",
              }}
              name="email"
            />

            <View style={styles.button}>
              <Button
                text="Save"
                backgroundColor={"#D20C83"}
                handlePress={handleSubmit}
                disabled={isSubmitting && !isValid}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FCF8FA", paddingTop: 20 },
  padding: { paddingTop: 8 },
  image: {
    height: 120,
    width: 120,
    borderWidth: 4,
    borderRadius: 60,
    borderColor: "#fff",
    justifyContent: "center",
  },
  inputContainer: {
    marginTop: 20,
    marginHorizontal: 25,
    borderRadius: 40,
    padding: 20,
    backgroundColor: "#fff",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
  },
});
