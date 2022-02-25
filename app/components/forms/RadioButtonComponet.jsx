import * as React from "react";
import { RadioButton, useTheme } from "react-native-paper";

const RadioButtonCComponent = () => {
  const [value, setValue] = React.useState("first");
  const { colors } = useTheme();
  return (
    <RadioButton.Group onValueChange={(value) => setValue(value)} value={value}>
      <RadioButton.Item color={colors.primary} label="Male" value="first" />
      <RadioButton.Item color={colors.primary} label="Female" value="second" />
    </RadioButton.Group>
  );
};

export default RadioButtonCComponent;
