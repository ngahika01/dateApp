import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const VehicleDetailsScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const params = navigation.getParam("item");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    ></SafeAreaView>
  );
};

export default VehicleDetailsScreen;

const styles = StyleSheet.create({});
