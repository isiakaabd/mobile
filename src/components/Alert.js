import { StyleSheet, StatusBar, View, ToastAndroid } from "react-native";
import React from "react";

const useAlert = () => {
  const showAlert = (message) => {
    return (
      <View style={styles.container}>
        {ToastAndroid.showWithGravity(
          message,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM
        )}
      </View>
    );
  };
  return { showAlert };
};

export default useAlert;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#888888",
    padding: 108,
    width: "100%",
  },
});
