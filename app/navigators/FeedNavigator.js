import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LOginScreen from "../screens/auth/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import BrandPromotion from "../screens/BrandPromotion";
import EventOrganising from "../screens/events/EventOrganising";
import BrandPromotionScreen from "../screens/brands/BrandPromotionScreen";

const Stack = createNativeStackNavigator();
const FeedNavigator = () => {
  const user = null;
  return (
    <SafeAreaProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="brand"
          options={{ headerShown: false }}
          component={BrandPromotion}
        />
        <Stack.Screen
          name="brandPromotion"
          options={{ headerShown: false }}
          component={BrandPromotionScreen}
        />
        <Stack.Screen
          name="event"
          options={{ headerShown: false }}
          component={EventOrganising}
        />
        <Stack.Screen
          name="login"
          options={{ headerShown: false }}
          component={LOginScreen}
        />
      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export default FeedNavigator;

const styles = StyleSheet.create({});
