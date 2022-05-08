import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Text, useTheme } from "react-native-paper";
import CustomButton from "../components/forms/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import LoveLottie from "../components/LoveLottie";

const HomeScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.primary,
        flex: 1,
        padding: 10,
      }}
    >
      <StatusBar style="light" />

      <LoveLottie />
      <View
        style={{
          justifyContent: "center",
          flex: 1,
        }}
      >
        <CustomButton
          value={"Event and Promotion"}
          color={colors.background}
          onClick={() => navigation.navigate("brand")}
        />
        <CustomButton value={"Go Premium"}
        onClick={() => navigation.navigate("premium")}
        color={colors.background} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
