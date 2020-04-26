import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import s from "../styles.js";

const Search = (props) => {
  const { handleChange, searchInput, getArticles } = props;
  return (
    <View style={s.inputContainer}>
      <Text
        style={{
          alignSelf: "center",
          fontSize: 20,
          marginLeft: 5,
        }}
      >
        🔍
      </Text>
      <TextInput
        style={s.inputField}
        value={searchInput}
        placeholder="Search..."
        onChangeText={(value) => {
          handleChange(value);
        }}
      />
      <TouchableOpacity
        style={s.button}
        onPress={() => {
          searchInput.length > 0 && getArticles(1, searchInput);
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          Go!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;
