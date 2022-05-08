import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, Button, Text, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../../components/forms/CustomButton";
import { View } from "react-native";

const PremiumScreen = () => {
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
        <Appbar.Content title="Premium Section" />
      </Appbar>
      <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
        <CustomButton
          value={"hookup"}
          onClick={() => navigation.navigate("dj")}
          color={colors.background}
        />
        <CustomButton
          value={"partygirls"}
          onClick={() => navigation.navigate("vehicles")}
          color={colors.background}
        />
      </View>
    </SafeAreaView>
  );
};

export default PremiumScreen;

const styles = StyleSheet.create({});
