import { StyleSheet } from "react-native";
import React from "react";
import { Card, Paragraph, Title } from "react-native-paper";

const PlaceOrderComponent = ({ listing }) => {
  return (
    <>
      <Card>
        <Card.Content>
          <Title>{listing.name}</Title>
          <Paragraph>{listing.price}</Paragraph>
          <Paragraph>4 seater vehicle</Paragraph>
        </Card.Content>
      </Card>
    </>
  );
};

export default PlaceOrderComponent;

const styles = StyleSheet.create({});
