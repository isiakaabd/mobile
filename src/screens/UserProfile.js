import { StyleSheet, Image, TouchableWithoutFeedback } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  UserHome,
  Wallet,
  Message,
  Settings,
  AddFriends,
  InviteFriends,
  ImportContacts,
} from "./settings/index";
import { FONTS } from "../utils/fonts";
import images from "../assets";
import { Support, EditProfile, About, Account } from "./options";

const Stack = createNativeStackNavigator();
const UserProfile = ({ navigation }) => {
  const Button = () => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <Image
          resizeMode="contain"
          source={images.back}
          style={{
            marginLeft: -30,
            height: 40,
            tintColor: "#fff",
          }}
        />
      </TouchableWithoutFeedback>
    );
  };
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        statusBarColor: "#3F0331",
        statusBarTranslucent: true,
        headerTitleStyle: {
          fontFamily: FONTS.MulishBold,
          color: "#fff",
        },
        headerStyle: {
          backgroundColor: "#3F0331",
        },
        headerLeft: () => <Button />,
      }}
      options={({ route }) => ({
        title: route.params,
      })}
      initialRouteName="UserHome"
    >
      <Stack.Screen
        name="UserHome"
        component={UserHome}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen
        name="Wallet"
        options={({ route }) => ({
          headerShown: true,

          title: route.params,
          headerStyle: {
            backgroundColor: "#3F0331",
          },
          statusBarColor: "#3F0331",
          statusBarTranslucent: true,
          headerTitleStyle: {
            fontFamily: FONTS.MulishBold,
            color: "#fff",
          },
          headerLeft: () => <Button />,
        })}
        component={Wallet}
      />
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="AddFriends" component={AddFriends} />
      <Stack.Screen name="InviteFriends" component={InviteFriends} />
      <Stack.Screen name="ImportContacts" component={ImportContacts} />

      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
};

export default UserProfile;

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
