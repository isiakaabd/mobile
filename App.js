import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PersistGate } from "redux-persist/integration/react";
import { SignUp, Login, Splash, Main, Verify, ForgotPassword } from "~/screens";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { persistor, store } from "./src/store/store";
import RouteNavigators from "./src/screens/RouteNavigator";

const Tab = createBottomTabNavigator();

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

  return (
    <Provider store={store}>
      {/* <ApiProvider api={api}> */}
      <PersistGate persistor={persistor}>
        <NavigationContainer theme={theme}>
          <RouteNavigators />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
