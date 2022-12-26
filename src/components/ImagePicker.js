import React, { useState, useEffect } from "react";
import {
  Text,
  Image,
  View,
  Platform,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useFormikContext } from "formik";

const ImagePickers = () => {
  const [image, setImage] = useState(null);
  const { setFieldValue } = useFormikContext();
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });
    console.log(result);
    // const base64 = await FileSystem.readAsStringAsync(result.uri, { encoding: 'base64' });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setFieldValue("image", result.assets[0].uri);
      // setFieldValue(
      //   "image",
      //   `data:image/jpeg;base64,${result.assets[0].base64}`
      // );
      setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
    }
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        position: "relative",
        backgroundColor: "transparent",

        justifyContent: "center",
      }}
    >
      {image ? (
        <Image
          onPress={pickImage}
          source={{ uri: image }}
          resizeMode="contain"
          style={{
            width: "100%",
            //   height: "100%",
            //   left: 0,
            //   right: 0,
            zIndex: 300,
            // position: "absolute",
          }}
        />
      ) : (
        <TouchableOpacity onPress={pickImage}>
          <Text>Add a picture</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ImagePickers;

// const styles = StyleSheet.create({});
