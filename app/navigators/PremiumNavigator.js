import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SignUp from "../screens/auth/SignUp";
import LoginScreen from "../screens/auth/LoginScreen";
import PremiumScreen from "../screens/premium/PremiumScreen";
import HookUpScreen from "../screens/premium/HookUpScreen";

const Stack = createNativeStackNavigator();
const FeedNavigator = () => {
  const user = null;
  return (
    <SafeAreaProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="hookup"
          component={HookUpScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="premhome"
          component={PremiumScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export default FeedNavigator;

const styles = StyleSheet.create({});
