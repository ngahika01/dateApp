import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, Text, TextInput, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import TextInputComponent from "../../components/forms/TextInputComponent";
import RadioButtonComponent from "../../components/forms/RadioButtonComponet";
import CustomButton from "../../components/forms/CustomButton";
import ImagePickerComponent from "../../components/forms/ImagePickerComponet";
import { StatusBar } from "expo-status-bar";

const SignUp = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Sign Up" />
      </Appbar.Header>
      <StatusBar style="dark" />

      <ScrollView style={{ padding: 10 }}>
        <TextInputComponent label={"Name"} />
        <ImagePickerComponent />
        <TextInputComponent label={"Email"} />
        <TextInputComponent label={"Phone Number"} keyboard="numeric" />
        <RadioButtonComponent value={"male"} value2="female" />
        <TextInputComponent label={"age"} keyboard="numeric" />
        <TextInputComponent label={"location"} />
        <TextInputComponent label={"password"} secure />
        <CustomButton value={"Sign Up"} />
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text
            style={{ textAlign: "center", marginTop: 10, marginBottom: 20 }}
          >
            Already have an account?Login
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
