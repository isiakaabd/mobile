import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import images from "../assets";
import { SearchInput } from "../components";
import { Formik } from "formik";
import { FONTS } from "../utils/fonts";
const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={{ width: 140, height: 80 }}
          resizeMode="contain"
          source={images.cheers3}
        />
      </View>
      <View>
        <Formik initialValues={{ search: "" }}>
          <SearchInput name="search" properties={{ placeholder: "Search" }} />
        </Formik>
      </View>
      <View style={styles.rect}>
        <View style={{ flex: 1 }}>
          <View style={styles.semi} />
          <Image
            source={images.polygon}
            style={{ position: "absolute", bottom: 15, left: -5 }}
          />
          <Image
            source={images.line}
            style={{
              position: "absolute",
              resizeMode: "contain",
              bottom: 0,
              left: -5,
            }}
          />
          <Image
            source={images.line2}
            style={{ position: "absolute", top: 0, right: -110 }}
          />
          <Text style={styles.text}>Put a smile on someone’s face 😃</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={images.cake}
            style={{
              flex: 1,
              height: "120%",
              right: -30,
              position: "absolute",
            }}
            resizeMode="cover"
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <Image
          source={images.cake2}
          style={{ height: 150 }}
          resizeMode="contain"
        />
        <Text
          style={{
            color: "#23031C",
            fontSize: 18,
            marginTop: 10,
            fontFamily: FONTS.MulishBold,
            textAlign: "center",
          }}
        >
          Oh dear! there are no birthdays today. Check back tomorrow 😉{" "}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#FCF8FA",
  },
  semi: {
    position: "absolute",
    backgroundColor: "rgba(240, 216, 101, 0.1)",
    height: 60,
    width: 100,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,

    top: 0,
    left: 40,
  },
  text: {
    fontFamily: FONTS.MulishBold,
    fontSize: 20,
    paddingLeft: 20,
    paddingTop: 20,
    color: "#fff",
  },
  rect: {
    backgroundColor: "#3F0331",
    borderRadius: 40,
    width: "100%",
    height: 160,
    marginTop: 50,
    flexDirection: "row",
  },
});
