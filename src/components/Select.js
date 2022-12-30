import { StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useFormikContext } from "formik";
const Select = ({ options, value, name }) => {
  const { setFieldValue } = useFormikContext();

  return (
    <Picker
      selectedValue={value}
      onValueChange={(itemValue) => {
        setFieldValue(name, itemValue);
      }}
    >
      {options.map((option) => (
        <Picker.Item
          label={option.label}
          key={option.value}
          value={option.value}
        />
      ))}
    </Picker>
  );
};

export default Select;

const styles = StyleSheet.create({});
