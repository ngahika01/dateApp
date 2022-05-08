import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card, TextInput } from "react-native-paper";
import * as ImagePicker from "expo-image-picker";
import TextInputComponent from "./TextInputComponent";

const ImagePickerComponent = () => {
  const [image, setImage] = React.useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 2],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  return (
    <>
      <TextInputComponent
        label={"Add an image"}
        value={image}
        secure={false}
        left={<TextInput.Icon onPress={pickImage} name="camera" />}
      />

      {/* {image && (
        <Card style={{ marginTop: 10 }}>
          <Card.Cover source={{ uri: image }} />
        </Card>
      )} */}
    </>
  );
};

export default ImagePickerComponent;

const styles = StyleSheet.create({});
