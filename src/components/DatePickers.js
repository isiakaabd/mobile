import { StyleSheet, Text, TouchableOpacity, Button, View } from "react-native";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useState } from "react";
import { useFormikContext } from "formik";
import { FONTS } from "../utils/fonts";
const DatePickers = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const { setFieldValue } = useFormikContext();
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    setFieldValue("birthday", currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: FONTS.Mulish }}>Date of Birthday</Text>

      <TouchableOpacity style={styles.datecontainer} onPress={showDatepicker}>
        <Text style={{ color: "#fff", fontFamily: FONTS.MulishBold }}>
          Date of Birthday
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DatePickers;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  datecontainer: {
    height: 50,
    width: "100%",
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
});
