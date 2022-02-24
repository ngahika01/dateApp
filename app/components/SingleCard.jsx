import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, Card, Paragraph, Title, useTheme } from "react-native-paper";

const SingleCard = ({ onPress, name, price, status, image }) => {
  const { colors } = useTheme();
  return (
    <>
      <Card
        style={{
          width: "50%",
          margin: 4,
        }}
        onPress={onPress}
        theme={{
          roundness: 10,
        }}
      
      >
        <Card.Cover
          style={{
            height: 150,
          }}
          source={{ uri: image }}
        />
        <Card.Content>
          <Title style>{name}</Title>
          <Paragraph>{price}</Paragraph>
          <Paragraph>{status}</Paragraph>
        </Card.Content>
      </Card>
    </>
  );
};

export default SingleCard;

const styles = StyleSheet.create({});
