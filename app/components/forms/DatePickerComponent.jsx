import React, { useState } from "react";
import { View, Button, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TextInput } from "react-native-paper";

export default function DatePickerComponent({ label, mt, mb }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  return (
    <>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          minimumDate={new Date()}
          display="calendar"
          onChange={onChange}
        />
      )}
      <TextInput
        onChangeText={(text) => setDate(text)}
        value={date.toLocaleDateString()}
        label={label}
        mode="outlined"
        style={{ marginTop: mt, marginBottom: mb }}
        right={<TextInput.Icon onPress={showDatepicker} name="calendar" />}
      />
    </>
  );
}
