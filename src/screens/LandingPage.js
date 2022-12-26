import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import { Notification, Home, UserProfile } from ".";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome, {
  //   So,
  //   RegularIcons,
  //   BrandIcons,
  //   parseIconFromClassName,
  FontAwesome5IconVariants,
} from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

const LandingPage = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Home"
        backBehavior="none"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "house";
            } else if (route.name === "User") {
              iconName = focused ? "users" : "user";
            }

            // You can return any component that you like here!
            return (
              <FontAwesome5
                // name={!eye ? "eye" : "eye-slash"}
                // size={15}
                name={iconName}
                size={size}
                color={color}

                // onPress={() => setEye(!eye)}
              />
            );
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Notification" component={Notification} />
        <Tab.Screen name="User" component={UserProfile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default LandingPage;

const styles = StyleSheet.create({});
