import { View, TextInput, Text, StyleSheet } from "react-native";
import { FONTS } from "../utils/fonts";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useState } from "react";
import { useFormikContext } from "formik";
const SearchInput = ({ properties, style, name, ...rest }) => {
  const { handleChange, handleBlur, values } = useFormikContext();
  return (
    <View style={styles.container}>
      <FontAwesome5
        name={"search"}
        size={20}
        color="#C1AFC7"
        style={{ marginLeft: 30 }}
      />
      <TextInput
        {...properties}
        {...rest}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        // {...field}
        value={values[name]}
        placeholderTextColor="#C1AFC7"
        nativeID={name}
        cursorColor="#822E6F"
        autoComplete="off"
        style={[styles.input, { ...style }]}
      />
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
    paddingVertical: 15,
    backgroundColor: "#fff",
    borderRadius: 50,
    height: 50,
    flexWrap: "nowrap",
  },
  input: {
    flex: 1,
    // height: 50,
    paddingHorizontal: 13,
    fontSize: 14,
    fontFamily: FONTS.Mulish,
  },
});

export default SearchInput;

SearchInput.defaultProps = {
  placeholderTextColor: "#9B9B9B",
  password: false,
  eye: false,
};
