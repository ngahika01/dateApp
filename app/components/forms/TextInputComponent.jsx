import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, TextInput, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useFormikContext } from "formik";

const TextInputComponent = ({ label, keyboard, ...otherProps }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  return (
    <View style={{ paddingBottom: 10 }}>
      <TextInput
        keyboardType={keyboard}
        label={label}
        mode="outlined"
        {...otherProps}
      />
    </View>
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({});
