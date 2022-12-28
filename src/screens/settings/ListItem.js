import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "../../assets";
import { FONTS, SHADOWS } from "../../utils/fonts";
const ListItem = ({ navigation, item }) => {
  const { title, icon, link } = item;
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate(link)}
    >
      <Image
        source={icon}
        style={{ width: 40, height: 40, ...SHADOWS.light }}
      />
      <Text
        style={{
          color: "#000",
          marginLeft: 20,
          fontSize: 19,
          fontFamily: FONTS.MulishBold,
        }}
      >
        {title}
      </Text>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <Image source={images.Arrow} style={{ width: 40, height: 40 }} />
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
});
