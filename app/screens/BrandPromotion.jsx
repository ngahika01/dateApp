import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, useTheme } from "react-native-paper";
import CustomButton from "../components/forms/CustomButton";
import { useNavigation } from "@react-navigation/native";

const BrandPromotion = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.primary,
        flex: 1,
        padding: 10,
        justifyContent: "center",
      }}
    >
      <CustomButton
        value={"Brand promotion"}
        onClick={() => navigation.navigate("brandPromotion")}
        color={colors.background}
      />
      <CustomButton
        value={"Event organising"}
        onClick={() => navigation.navigate("event")}
        color={colors.background}
      />
    </SafeAreaView>
  );
};

export default BrandPromotion;

const styles = StyleSheet.create({});
