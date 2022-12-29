import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  ChangePassword,
  Login,
  Main,
  SignUp,
  Verify,
  ForgotPassword,
  ConfirmEmail,
  LandingPage,
  Register,
  Splash,
} from ".";
import { useSelector } from "react-redux";
import { Fragment } from "react";

const Stack = createNativeStackNavigator();
const RouteNavigators = () => {
  const accessToken = useSelector((state) => state.reducer.bearerToken);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarColor: "#3F0331",
        statusBarTranslucent: true,
      }}
      initialRouteName="Splash"
    >
      {!accessToken ? (
        <Fragment>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Verify" component={Verify} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
        </Fragment>
      ) : (
        <Stack.Screen name="Home" component={LandingPage} />
      )}
    </Stack.Navigator>
  );
};

export default RouteNavigators;

const styles = StyleSheet.create({});
