import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, useTheme, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import TextInputComponent from "../../components/forms/TextInputComponent";
import RadioButtonComponent from "../../components/forms/RadioButtonComponet";
import CustomButton from "../../components/forms/CustomButton";
import { StatusBar } from "expo-status-bar";

const LoginScreen = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Sign In" />
      </Appbar.Header>
      <StatusBar style="dark" />
      <ScrollView
        style={{ padding: 10 }}
        contentContainerStyle={{
          justifyContent: "center",
          flex: 1,
        }}
      >
        <TextInputComponent label={"Name"} />
        <TextInputComponent label={"password"} secure />
        <CustomButton value={"Sign in"} />
        <TouchableOpacity onPress={() => navigation.navigate("signup")}>
          <Text style={{ textAlign: "center", marginTop: 10 }}>
            Already have an account?Login
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
