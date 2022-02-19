import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, useTheme } from "react-native-paper";
import CustomButton from "../components/forms/CustomButton";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
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
        value={"Event and Promotion"}
        color={colors.background}
        onClick={() => navigation.navigate("brand")}
      />
      <CustomButton value={"Go Premium"} color={colors.background} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
