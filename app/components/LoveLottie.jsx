import { StyleSheet, Text, View } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const LoveLottie = () => {
  return (
    <View
      style={{
       
        alignItems: "center",
      }}
    >
      <LottieView
        style={{
          width: 200,
        }}
        autoPlay={true}
        source={require("../assets/animations/love.json")}
      ></LottieView>
    </View>
  );
};

export default LoveLottie;

const styles = StyleSheet.create({});
