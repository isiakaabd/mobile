import { TouchableOpacity, Text, StyleSheet } from "react-native";
import React from "react";
import { FONTS } from "../utils/fonts";

const Button = ({
  text,
  fontSize,
  bg,
  backgroundColor,
  handlePress,
  textColor,
<<<<<<< HEAD
  disabled,
=======
>>>>>>> ac6b9fd12829920f61efb0ce09cc071768de9498
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
<<<<<<< HEAD
      {...rest}
      disabled={disabled}
      style={[styles.container, { backgroundColor }]}
    >
      <Text style={[styles.text]}>{text}</Text>
=======
      style={[styles.container, { backgroundColor }]}
    >
      <Text style={[styles.text, { ...rest }]}>{text}</Text>
>>>>>>> ac6b9fd12829920f61efb0ce09cc071768de9498
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#822E6F",
    borderRadius: 60,
    marginTop: 20,
  },
  text: {
    fontSize: 19,
    color: "#fff",
    lineHeight: 44,
    fontFamily: FONTS.MulishBold,
  },
});
export default Button;
