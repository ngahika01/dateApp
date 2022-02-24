import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { vehicles } from "../../data/data";
import SingleCard from "../../components/SingleCard";
import FlatListComponent from "../../components/forms/FlatListComponent";

const RoadTripVehiclesScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.background,
        flex: 1,
      }}
    >
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Road Trip Vehicles" />
      </Appbar.Header>
      <View>
        <FlatListComponent data={vehicles} navSreen={"VehicleDetails"} />
      </View>
    </SafeAreaView>
  );
};

export default RoadTripVehiclesScreen;

const styles = StyleSheet.create({});
