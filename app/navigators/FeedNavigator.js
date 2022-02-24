import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import LOginScreen from "../screens/auth/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import BrandPromotion from "../screens/BrandPromotion";
import EventOrganising from "../screens/events/EventOrganising";
import BrandPromotionScreen from "../screens/brands/BrandPromotionScreen";
import RoadTripVehiclesScreen from "../screens/vehicles/RoadTripVehiclesScreen";
import VehicleDetailsScreen from "../screens/vehicles/VehicleDetailsScreen";
import PlaceOrderScreen from "../screens/order/PlaceOrderScreen";

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
          name="vehicles"
          options={{ headerShown: false }}
          component={RoadTripVehiclesScreen}
        />
        <Stack.Screen
          name="VehicleDetails"
          options={{ headerShown: false }}
          component={VehicleDetailsScreen}
        />
        <Stack.Screen
          name="placeorder"
          options={{ headerShown: false }}
          component={PlaceOrderScreen}
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
