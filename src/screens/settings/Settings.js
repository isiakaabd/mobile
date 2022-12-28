import {
  StyleSheet,
  FlatList,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import images from "../../assets";
import ListItem from "./ListItem";
import { FONTS } from "../../utils/fonts";
import { useLogoutMutation } from "../../store/api/authSlice";
import { Loader } from "../../components";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/reducers/authReducer";
import useAlert from "../../components/Alert";

const Profile = ({ navigation }) => {
  const { profile, edit, radio, info } = images;
  const [logout, { isLoading }] = useLogoutMutation();
  const { showAlert } = useAlert();
  const dispatch = useDispatch();
  const data = [
    {
      icon: edit,
      title: "Edit Profile",
      link: "EditProfile",
    },
    {
      icon: profile,
      title: "Account",
      link: "Account",
    },
    {
      icon: info,
      title: "About",
      link: "About",
    },
    {
      icon: radio,
      title: "Support",
      link: "Support",
    },
  ];
  const handleLogout = async () => {
    const { data, error } = await logout();
    dispatch(logOut());
    if (data) {
      showAlert(data?.message);
    } else if (error) {
      showAlert(error?.message);
    }
    navigation.navigate("RouteNavigators", { screen: "Login" });
  };
  if (isLoading) return <Loader />;
  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={data}
          contentContainerStyle={{ marginTop: 40 }}
          renderItem={({ item }) => (
            <ListItem item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.title}
        />
      </View>
      <TouchableOpacity
        onPress={handleLogout}
        style={{
          borderRadius: 50,
          borderWidth: 1,
          borderColor: "#D20C83",
          backgroundColor: "transparent",
          padding: 20,
          marginTop: 80,
          marginHorizontal: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "#D20C83",
            fontFamily: FONTS.MulishBold,
            fontSize: 16,
          }}
        >
          Log out
        </Text>
      </TouchableOpacity>
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
