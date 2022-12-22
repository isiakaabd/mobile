import { View, TextInput, StyleSheet } from "react-native";
import { FONTS } from "../utils/fonts";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Input = ({
  value,
  type,
  placeholder,
  placeholderColor,
  onchange,
  password,
  eye,
  onEyeIconClick,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onchange}
        placeholder={placeholder}
        {...rest}
        cursorColor="#822E6F"
        autoComplete="off"
        keyboardType={type}
        secureTextEntry={type === "password" ? !eye : false}
        placeholderTextColor={placeholderColor}
        style={styles.input}
      />
      {password && (
        <FontAwesome5
          name={eye ? "eye" : "eye-slash"}
          size={15}
          onPress={onEyeIconClick}
        />
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
