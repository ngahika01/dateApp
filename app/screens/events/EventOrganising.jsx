import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, Button, Text, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/forms/CustomButton";
import { View } from "react-native";

const EventOrganising = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.primary,
        flex: 1,
      }}
    >
      <Appbar style={{ backgroundColor: colors.background }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Event organising" />
      </Appbar>
      <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
        <CustomButton
          value={"Event organiser"}
          onClick={() => navigation.navigate("event")}
          color={colors.background}
        />
        <CustomButton
          value={"Sound system"}
          onClick={() => navigation.navigate("event")}
          color={colors.background}
        />
        <CustomButton
          value={"Request a party girl"}
          onClick={() => navigation.navigate("event")}
          color={colors.background}
        />
        <CustomButton
          value={"DJ and MC"}
          onClick={() => navigation.navigate("event")}
          color={colors.background}
        />
        <CustomButton
          value={"Roadtrip vehicles"}
          onClick={() => navigation.navigate("vehicles")}
          color={colors.background}
        />
      </View>
    </SafeAreaView>
  );
};

export default EventOrganising;

const styles = StyleSheet.create({});
