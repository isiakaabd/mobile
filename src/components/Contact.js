import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import images from "../assets";
import React from "react";
import { FONTS } from "../utils/fonts";

const Contact = ({ item }) => {
  const { first_name, phone, birthday, last_name } = item;
  const blurBirthday = (birthday) => {
    let res = birthday.split("-");
    res[0] = "XXXX";
    return res.join("-");
  };
  return (
    <TouchableWithoutFeedback style={styles.container}>
      <View style={styles.main}>
        <View
          style={{
            height: 45,
            marginRight: 15,
            width: 45,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={images.image02}
            style={{
              height: 45,
              width: 45,
              backgroundColor: "#00f2f3",
              borderRadius: 45 / 2,
            }}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            flex: 1,
            borderBottomWidth: 2,
            borderColor: "#E0E0E0",
            flexDirection: "row",
            paddingBottom: 15,
          }}
        >
          <View style={{ marginRight: "auto" }}>
            <Text style={[styles.text]}>{`${first_name ? first_name : ""} ${
              last_name ? last_name : ""
            }`}</Text>
            <Text style={[styles.text2]}>{phone}</Text>
          </View>
          <Text style={[styles.text3]}>{blurBirthday(birthday)}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    // height: 50,
  },
  text: {
    color: "#200E32",
    fontFamily: FONTS.MulishBold,
    fontSize: 14,
  },
  text2: {
    fontFamily: FONTS.Mulish,
    color: "#4A4A4A",
    fontSize: 12,
  },
  text3: {
    color: "#9B9B9B",
    flex: 1,
    textAlign: "right",
    fontFamily: FONTS.MulishBold,
    fontSize: 12,
  },
  main: {
    marginHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});
