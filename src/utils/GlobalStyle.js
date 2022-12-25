import { StyleSheet } from "react-native";
import { FONTS } from "./fonts";

export default GlobalStyle = StyleSheet.create({
  fonts: {
    fontFamily: FONTS.Lato,
    fontSize: 25,
  },
  error: {
    color: "#FF0101",
    fontFamily: FONTS.MulishBold,
    fontSize: 12,
    marginTop: 5,
  },
});
