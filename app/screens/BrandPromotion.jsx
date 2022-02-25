import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, Button, Text, useTheme } from "react-native-paper";
import CustomButton from "../components/forms/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const BrandPromotion = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.primary,
        flex: 1,
      }}
    >
      <Appbar.Header
        style={{
          backgroundColor: colors.background,
        }}
      >
        <StatusBar style="light" />
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Events and Brand promotion" />
      </Appbar.Header>
      <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
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
      </View>
    </SafeAreaView>
  );
};

export default BrandPromotion;

const styles = StyleSheet.create({});
