import { View, TextInput, Text, StyleSheet } from "react-native";
import { FONTS } from "../utils/fonts";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useState } from "react";
import { useFormikContext } from "formik";
const Input = ({ properties, style, name, ...rest }) => {
  const [eye, setEye] = useState(true);
  const { handleChange, handleBlur, touched, values, errors } =
    useFormikContext();
  return (
    <View>
      <View style={styles.container}>
        <TextInput
          {...properties}
          {...rest}
          onChangeText={handleChange(name)}
          onBlur={handleBlur(name)}
          value={values[name]}
          secureTextEntry={
            name === "password" || name === "confirmPassword" ? eye : false
          }
          nativeID={name}
          
          cursorColor="#822E6F"
          autoComplete="off"
          style={[styles.input, { ...style }]}
        />
        {properties?.keyboardType === "password" && (
          <FontAwesome5
            name={!eye ? "eye" : "eye-slash"}
            size={15}
            onPress={() => setEye(!eye)}
          />
        )}
      </View>
      {touched[name] && errors[name] && (
        <Text style={GlobalStyle.error}>{errors[name]}</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#D1D8E9",
    borderBottomWidth: 2,
    flexWrap: "nowrap",
  },
  input: {
    flex: 1,
    // height: 50,
    paddingHorizontal: 13,
    fontSize: 14,
    fontFamily: FONTS.MulishBold,
  },
});

export default Input;

Input.defaultProps = {
  placeholderTextColor: "#9B9B9B",
  password: false,
  eye: false,
};
