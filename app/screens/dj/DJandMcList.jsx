import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { dj, vehicles } from "../../data/data";
import SingleCard from "../../components/SingleCard";
import FlatListComponent from "../../components/forms/FlatListComponent";

const DJandMcList = () => {
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
        <Appbar.Content title="Dj and Mcs" />
      </Appbar.Header>
      <View>
        <FlatListComponent data={dj} navSreen={"djDetails"} />
      </View>
    </SafeAreaView>
  );
};

export default DJandMcList;

const styles = StyleSheet.create({});
