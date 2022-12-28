import { StyleSheet, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { UserHome, Profile, Wallet, Message } from "./settings/index";
import { FONTS } from "../utils/fonts";
import images from "../assets";

import { Support, EditProfile, About, Account } from "./options";
const Stack = createNativeStackNavigator();
const UserProfile = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="UserHome"
    >
      <Stack.Screen name="UserHome" component={UserHome} />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="Support" component={Support} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen
        name="Settings"
        component={Profile}
        options={({ route }) => ({
          headerShown: true,

          title: route.params,
          headerStyle: {
            backgroundColor: "#3F0331",
          },
          statusBarColor: "#F8EAF2",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: FONTS.MulishBold,
          },
          headerLeft: () => (
            <Image
              resizeMode="contain"
              source={images.back}
              style={{
                marginLeft: -30,
                height: 40,
                tintColor: "#fff",
              }}
            />
          ),
        })}
      />
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
