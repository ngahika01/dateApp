import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import {
  Appbar,
  useTheme,
  Card,
  Paragraph,
  Text,
  Title,
} from "react-native-paper";
import FlatListComponent from "../../components/forms/FlatListComponent";
import { girls } from "../../data/data";
import { StatusBar } from "expo-status-bar";

const ListPartGirls = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <StatusBar style="auto" />
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Party girls" />
        <Appbar.Action icon="cart" />
      </Appbar.Header>
      <FlatList
        data={girls}
        keyExtractor={(item) => item.id}
        style={{
          margin: 10,
        }}
        // render items in two rows
        numColumns={2}
        renderItem={({ item }) => (
          <Card
            style={{
              margin: 10,
              padding: 10,
            }}
            // onPress={() => navigation.navigate("navSreen", { item })}
          >
            <Card.Cover
              style={{
                height: 150,
              }}
              blurRadius={50}
              source={{ uri: item.image }}
            />
            <TouchableOpacity
              style={[
                styles.img,
                {
                  backgroundColor: colors.background,
                  width: "80%",
                  borderRadius: 40,
                },
              ]}
            >
              <Text>View image</Text>
            </TouchableOpacity>
            <Card.Content>
              <Title>{item.name}</Title>
              <Paragraph>{item.price}</Paragraph>
              <Paragraph>
                {item.status === true ? (
                  <Text style={{ color: colors.primary }}>Available</Text>
                ) : (
                  <Text style={{ color: colors.error }}>Not Available</Text>
                )}
              </Paragraph>
            </Card.Content>
          </Card>
        )}
      />
    </SafeAreaView>
  );
};

export default ListPartGirls;

const styles = StyleSheet.create({
  img: {
    position: "absolute",
    top: 50,
    left: 10,
    justifyContent: "center",
    padding: 10,
  },
});
