import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import images from "../../assets";
import { FONTS, SHADOWS } from "../../utils/fonts";
const ImportContacts = ({ navigation }) => {
  const arr = [
    {
      title: "Phonebook",
      image: images.contacts,
      link: "Phone Book",
    },
    {
      title: "Google",
      image: images.google,
      link: "Google",
    },
    {
      title: "Add Friends",
      image: images.follow,
      link: "Add Friends",
    },
  ];
  return (
    <View>
      <View style={{ padding: 30 }}>
        <Text
          style={{ fontSize: 17, fontFamily: FONTS.MulishBold, color: "#000" }}
        >
          Connect with your friends and spread some love
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          paddingHorizontal: 20,
        }}
      >
        {arr.map((item, index) => {
          return (
            <TouchableOpacity
              style={{
                width: 120,
                marginBottom: 50,
                marginHorizontal: 10,
              }}
              key={item.title}
              onPress={() => navigation.navigate(item.link)}
            >
              <View key={index} style={styles.container}>
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={{ height: 54, width: 54 }}
                />
              </View>
              <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default ImportContacts;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    width: "100%",
    height: 120,
    // width: "40%",
    justifyContent: "center",
    alignItems: "center",
    // ...SHADOWS.light,
    // flexBasis: 120,

    borderRadius: 17,
  },
  text: {
    fontFamily: FONTS.MulishBold,
    fontSize: 14,
    marginTop: 10,
    textAlign: "center",
  },
});
