import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
<<<<<<< HEAD
import { PersistGate } from "redux-persist/integration/react";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { persistor, store } from "./src/store/store";
import RouteNavigators from "./src/screens/RouteNavigator";
=======
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  SignUp,
  Login,
  Splash,
  Main,
  Verify,
  ForgotPassword,
} from "./src/screens";
import { useFonts } from "expo-font";

const Tab = createBottomTabNavigator();
const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Signup" component={SignUp} />
    </Tab.Navigator>
  );
};

const Stack = createNativeStackNavigator();
>>>>>>> ac6b9fd12829920f61efb0ce09cc071768de9498

export default function App() {
  const [loaded] = useFonts({
    LatoBold: require("./src/assets/fonts/Lato-Bold.ttf"),
    LatoLight: require("./src/assets/fonts/Lato-Light.ttf"),
    Lato: require("./src/assets/fonts/Lato-Regular.ttf"),
    Mulish: require("./src/assets/fonts/Mulish-Regular.ttf"),
    MulishBold: require("./src/assets/fonts/Mulish-Bold.ttf"),
  });

  const theme = {
    ...DefaultTheme,

    colors: {
      ...DefaultTheme.colors,
      background: "#fff",
      primary: "#822E6F",
    },
    font: {
      fontFamily: "Lato-Bold",
      fontSize: 90,
    },
  };

  if (!loaded) return null;
<<<<<<< HEAD
  console.log(store);
  console.log(persistor);

  return (
    <Provider store={store}>
      {/* <ApiProvider api={api}> */}
      <PersistGate persistor={persistor}>
        <NavigationContainer theme={theme}>
          <RouteNavigators />
        </NavigationContainer>
      </PersistGate>
    </Provider>
=======
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Splash"
      >
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
>>>>>>> ac6b9fd12829920f61efb0ce09cc071768de9498
  );
}
