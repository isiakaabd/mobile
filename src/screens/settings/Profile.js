import { StyleSheet, SafeAreaView, Text, View } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import images from "../../assets";

const Profile = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: { flex: 1 },
  top: {
    width: "100%",
    height: 230,
    backgroundColor: "#3F0331",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  settings: {
    borderWidth: 2,
    padding: 10,
    width: 40,
    height: 40,
    position: "absolute",
    top: 30,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    borderColor: "#fff",
  },

  semi: {
    height: 232,
    width: 232,
    backgroundColor: "#F0D865",
    position: "absolute",
    borderRadius: 116,
    right: "-35.09%",
    top: "-38.04%",
  },
});
