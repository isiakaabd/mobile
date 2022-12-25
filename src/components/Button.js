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
  disabled,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      {...rest}
      disabled={disabled}
      style={[styles.container, { backgroundColor }]}
    >
      <Text style={[styles.text]}>{text}</Text>
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
