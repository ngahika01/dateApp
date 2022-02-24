import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, Card, Paragraph, Title, useTheme } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import CustomButton from "../../components/forms/CustomButton";
import DatePickerComponent from "../../components/forms/DatePickerComponent";

const VehicleDetailsScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const item = route.params.item;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
      }}
    >
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Vehicle Details" />
      </Appbar.Header>
      <View
        style={{
          marginTop: 10,
          padding: 10,
        }}
      >
        <Card>
          <Card.Cover
            style={{
              height: 200,
            }}
            source={{ uri: item.image }}
          />
          <Card.Content>
            <Title>{item.name}</Title>
            <Paragraph>{item.price}</Paragraph>
            <Paragraph>4 seater vehicle</Paragraph>
          </Card.Content>
        </Card>
        <View>
          <DatePickerComponent label={"Select booking date"} mt={10} mb={10} />
          <CustomButton
            value={"Book now"}
            onClick={() => navigation.navigate("placeorder", { item })}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VehicleDetailsScreen;

const styles = StyleSheet.create({});
