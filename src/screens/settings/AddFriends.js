import { StyleSheet, TouchableOpacity, Image, Text, View } from "react-native";
import images from "../../assets";
import { useEffect } from "react";

const AddFriends = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerleft: () => (
        <TouchableOpacity onPress={() => setOpen(true)}>
          <Image
            source={images.dots}
            resizeMode="contain"
            style={{ height: 20, marginRight: 20 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View>
      <Text>AddFriends</Text>
    </View>
  );
};

export default AddFriends;

const styles = StyleSheet.create({});
