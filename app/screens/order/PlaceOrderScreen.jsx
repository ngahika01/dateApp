import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Appbar, useTheme } from "react-native-paper";
import PlaceOrderComponent from "../../components/forms/PlaceOrderComponent";
import CustomButton from "../../components/forms/CustomButton";

const PlaceOrderScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const item = route.params.item;
  const { colors } = useTheme();
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.background,
        flex: 1,
      }}
    >
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Place Order" />
      </Appbar.Header>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <PlaceOrderComponent listing={item} />
        <CustomButton value={"Complete"} />
      </View>
    </SafeAreaView>
  );
};

export default PlaceOrderScreen;

const styles = StyleSheet.create({});
