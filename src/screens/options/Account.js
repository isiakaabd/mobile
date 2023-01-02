import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Switch,
  View,
} from "react-native";
import React, { useState } from "react";
import images from "../../assets";
import { FONTS } from "../../utils/fonts";
const Account = ({ navigation }) => {
  const data = [
    {
      id: 1,
      title: "Notification",
      link: false,
    },
    {
      id: 2,
      title: "Password",
      link: "Password",
    },
    {
      id: 3,
      title: "Delivery Address",
      link: "Delivery Address",
    },
    {
      id: 4,
      title: "Display age",
      link: false,
    },

    {
      id: 5,
      title: "Bank Details",
      link: "Bank Details",
    },

    {
      id: 6,
      title: "Contributions",
      link: "Contributions",
    },
  ];
  const Item = ({ item, navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    return (
      <TouchableOpacity
        onPress={() => item.link && navigation.navigate(item.link)}
        style={{
          flexDirection: "row",
          marginBottom: 30,
          alignItems: "center",
        }}
      >
        <Text style={{ flex: 1, fontSize: 19, fontFamily: FONTS.LatoBold }}>
          {item.title}
        </Text>
        {item.link ? (
          <Image source={images.Arrow} style={{ height: 40, width: 40 }} />
        ) : (
          <Switch
            trackColor={{ false: "#F8EAF2", true: "#D20C83" }}
            thumbColor={{ true: "#D20C83", false: "red" }}
            ios_backgroundColor="#D20C83"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView
      style={{ paddingHorizontal: 30, flex: 1, backgroundColor: "#F8EAF2" }}
    >
      <View style={{ marginTop: 60 }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item item={item} navigation={navigation} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({});
