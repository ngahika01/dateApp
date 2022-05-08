import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Appbar,
  Button,
  Card,
  Paragraph,
  Title,
  useTheme,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { girls } from "../../data/data";
import CustomButton from "../../components/forms/CustomButton";
import { StatusBar } from "expo-status-bar";

const HookUpScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.background,
        flex: 1,
      }}
    >
      <StatusBar style="dark" />
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Hook Up" />
      </Appbar.Header>
      <FlatList
        data={girls}
        keyExtractor={(item) => item.id}
        // render items in two rows
        numColumns={2}
        renderItem={({ item }) => (
          <Card
            style={{
              margin: 10,
              width: "45%",
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

            <Card.Content>
              <Title>{item.name}</Title>
              <Card.Content
                style={{
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  style={[styles.touch, { backgroundColor: colors.primary }]}
                >
                  <Text style={{ color: colors.background }}>Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.touch, { backgroundColor: colors.primary }]}
                >
                  <Text style={{ color: colors.background }}>View pic</Text>
                </TouchableOpacity>
                
              </Card.Content>
            </Card.Content>
          </Card>
        )}
      />
    </SafeAreaView>
  );
};

export default HookUpScreen;

const styles = StyleSheet.create({
  touch: {
    padding: 7,
    borderRadius: 5,
    margin: 5,
  },
  img: {
    position: "absolute",
    top: 50,
    left: 10,
    justifyContent: "center",
    padding: 10,
  },
});
