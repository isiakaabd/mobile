import {
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AddFriends, InviteFriends, ImportContacts } from "./settings/index";
import { FONTS } from "../utils/fonts";
import images from "../assets";
import Contacts from "./Contacts";
import AddFriendsFromContact from "./AddFriendsFromContact";

const Stack = createNativeStackNavigator();
const ContactNavigator = ({ navigation }) => {
  //   const [open, setOpen] = useState(false);
  //   useEffect(() => {
  //     navigation.setOptions({
  //       headerRight: () => (
  //         <TouchableOpacity onPress={() => setOpen(true)}>
  //           <Image
  //             source={images.dots}
  //             resizeMode="contain"
  //             style={{ height: 20, marginRight: 20 }}
  //           />
  //         </TouchableOpacity>
  //       ),
  //     });
  //   }, [navigation]);
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
      initialRouteName="Contacts"
    >
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{ headerShown: true, headerLeft: null }}
      />

      <Stack.Screen name="Add Friends Manually" component={AddFriends} />
      <Stack.Screen name="Invite Friends" component={InviteFriends} />
      <Stack.Screen name="Import Contacts" component={ImportContacts} />
      <Stack.Screen name="Add Friends" component={AddFriendsFromContact} />
    </Stack.Navigator>
  );
};

export default ContactNavigator;

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
