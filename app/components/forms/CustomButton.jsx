import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text } from "react-native-paper";

const CustomButton = ({ color, value, labelStyle, onClick }) => {
  return (
    <>
      <Button
        style={{
          marginTop: 10,
        }}
        labelStyle={labelStyle}
        theme={{ roundness: 40 }}
        color={color}
        mode="contained"
        onPress={onClick}
      >
        {value}
      </Button>
    </>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
