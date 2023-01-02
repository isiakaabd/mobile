import { StyleSheet, View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useFormikContext } from "formik";
import { FONTS } from "../utils/fonts";
const Select = ({ options, name, placeholder }) => {
  const { handleChange, handleBlur, values, setFieldValue, touched, errors } =
    useFormikContext();
  return (
    <View>
      <Picker
        selectedValue={values[name]}
        placeholder={placeholder}
        dropdownIconColor="#D20C83"
        onValueChange={handleChange(name)}
        onBlur={handleBlur(name)}
        itemStyle={{ fontFamily: FONTS.MulishBold, fontWeight: 900 }}
        style={{
          fontFamily: FONTS.MulishBold,
          fontSize: 10,
          height: 50,
        }}
      >
        {options.map((option) => (
          <Picker.Item
            style={{ fontSize: 18, fontWeight: FONTS.Mulish }}
            label={option.label}
            color="#9B9B9B"
            key={option.value}
            fontFamily={"Mulish"}
            value={option.value}
          />
        ))}
      </Picker>
      {touched[name] && errors[name] && (
        <Text style={GlobalStyle.error}>{errors[name]}</Text>
      )}
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({});
