import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "../screens/HomeScreen";
import BrandPromotion from "../screens/BrandPromotion";
import EventOrganising from "../screens/events/EventOrganising";
import BrandPromotionScreen from "../screens/brands/BrandPromotionScreen";
import RoadTripVehiclesScreen from "../screens/vehicles/RoadTripVehiclesScreen";
import VehicleDetailsScreen from "../screens/vehicles/VehicleDetailsScreen";
import PlaceOrderScreen from "../screens/order/PlaceOrderScreen";
import SignUp from "../screens/auth/SignUp";
import LoginScreen from "../screens/auth/LoginScreen";
import DJandMcList from "../screens/dj/DJandMcList";
import DjDetails from "../screens/dj/DjDetails";
import ListPartGirls from "../screens/partgirls/ListPartGirls";
import ListSoundSystemsScreen from "../screens/sound/ListSoundSystemsScreen";
import SoundDetailsScreen from "../screens/sound/SoundDetailsScreen";
import PremiumNavigator from "./PremiumNavigator";

const Stack = createNativeStackNavigator();
const FeedNavigator = () => {
  const user = null;
  return (
    <SafeAreaProvider>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="login"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="signup"
          options={{ headerShown: false }}
          component={SignUp}
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
          name="dj"
          options={{ headerShown: false }}
          component={DJandMcList}
        />
        <Stack.Screen
          name="djDetails"
          options={{ headerShown: false }}
          component={DjDetails}
        />
        <Stack.Screen
          name="event"
          options={{ headerShown: false }}
          component={EventOrganising}
        />
        <Stack.Screen
          name="party"
          options={{ headerShown: false }}
          component={ListPartGirls}
        />
        <Stack.Screen
          name="sound"
          options={{ headerShown: false }}
          component={ListSoundSystemsScreen}
        />
        <Stack.Screen
          name="soundDetails"
          options={{ headerShown: false }}
          component={SoundDetailsScreen}
        />
        <Stack.Screen
          name="premium"
          options={{ headerShown: false }}
          component={PremiumNavigator}
        />

      </Stack.Navigator>
    </SafeAreaProvider>
  );
};

export default FeedNavigator;

const styles = StyleSheet.create({});
