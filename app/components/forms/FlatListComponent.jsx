import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import SingleCard from "../SingleCard";
import { useNavigation } from "@react-navigation/native";

const FlatListComponent = ({ data, navSreen }) => {
  const navigation = useNavigation();

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        style={{
          margin: 10,
        }}
        // render items in two rows
        numColumns={2}
        renderItem={({ item }) => (
          <SingleCard
            onPress={() => navigation.navigate(navSreen, { item })}
            name={item.name}
            price={item.price || item.charges}
            status={item.status || item.available}
            image={item.image}
          />
        )}
      />
    </>
  );
};

export default FlatListComponent;

const styles = StyleSheet.create({});
