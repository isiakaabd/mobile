import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { FONTS } from "../utils/fonts";
import images from "../assets";
import { useState } from "react";
import { useFormikContext } from "formik";
const SearchInput = ({
  properties,
  onClick,
  style,
  name,
  containerStyle,
  loading,
  ...rest
}) => {
  const { handleChange, handleBlur, handleSubmit, values } = useFormikContext();

  return (
    <>
      <View style={[styles.container, { ...containerStyle }]}>
        <TouchableWithoutFeedback onPress={handleSubmit}>
          <Image
            source={images.search}
            resizeMode="contain"
            style={{ marginLeft: 20, height: 25 }}
          />
        </TouchableWithoutFeedback>
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
      {loading && (
        <Text
          style={{
            color: "#000",
            textAlign: "right",
            marginTop: 3,
            fontFamily: FONTS.MulishBold,
          }}
        >
          Loading..
        </Text>
      )}
    </>
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
    zIndex: 200,
  },
  input: {
    flex: 1,
    // height: 50,
    paddingHorizontal: 10,
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
