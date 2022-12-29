import { StyleSheet, Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Notification, Home, UserProfile, Contact } from ".";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { useSelector } from "react-redux";

const Tab = createBottomTabNavigator();

const LandingPage = () => {
  const user = useSelector((state) => state?.reducer?.user);

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Home"
        backBehavior="none"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Contact") {
              iconName = "user";
            } else if (route.name === "Notification") {
              iconName = "bell";
            }

            // You can return any component that you like here!
            return route.name !== "UserProfile" ? (
              <FontAwesome5
                solid={focused}
                name={iconName}
                size={24}
                color={color}
              />
            ) : (
              <View
                style={{
                  height: 27,
                  borderRadius: 50,
                  width: 27,
                  padding: 2,
                  overflow: "hidden",
                  backgroundColor: "rgba(63, 3, 49, .8)",
                }}
              >
                <Image
                  source={{ uri: user?.avatar }}
                  style={{ height: "100%", width: 24 }}
                  resizeMode="contain"
                />
              </View>
            );
          },
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <View
              style={{
                height: 6,
                width: 6,
                borderRadius: 50,
                backgroundColor: focused ? "#D20C83" : "transparent",
              }}
            />
          ),
          tabBarStyle: {
            padding: 5,
            height: 80,
            paddingBottom: 10,
            backgroundColor: "#fff",
          },
          tabBarActiveTintColor: "#D20C83",
          tabBarInactiveTintColor: "#BA9EC3",
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{ tabBarBadge: 3 }}
        />
        <Tab.Screen name="Contact" component={Contact} />
        <Tab.Screen name="UserProfile" component={UserProfile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default LandingPage;

const styles = StyleSheet.create({});
