import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, useTheme } from "react-native-paper";
import TextInputComponent from "../../components/forms/TextInputComponent";
import CustomButton from "../../components/forms/CustomButton";

const BrandPromotionScreen = () => {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <ScrollView>
        <Appbar.Header>
          <Appbar.BackAction onPress={() => navigation.goBack()} />
          <Appbar.Content title="Brand promotion" />
        </Appbar.Header>
        <View style={{ padding: 10, marginTop: 50 }}>
          <TextInputComponent label={"brand"} />
          <TextInputComponent label={"Method of promotion"} />
          <CustomButton value={"Submit"} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BrandPromotionScreen;

const styles = StyleSheet.create({});
