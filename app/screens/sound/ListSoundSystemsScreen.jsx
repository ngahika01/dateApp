import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { sound, vehicles } from "../../data/data";
import SingleCard from "../../components/SingleCard";
import FlatListComponent from "../../components/forms/FlatListComponent";

const ListSoundSystemsScreen = () => {
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
        <Appbar.Content title="Sound systems" />
      </Appbar.Header>
      <View>
        <FlatListComponent data={sound} navSreen={"soundDetails"} />
      </View>
    </SafeAreaView>
  );
};

export default ListSoundSystemsScreen;

const styles = StyleSheet.create({});
