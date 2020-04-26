import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import s from "../styles.js";

const Categories = (props) => {
  const { getArticlesBySection } = props;
  const categories = [
    "Culture",
    "Environment",
    "Film",
    "Food",
    "Music",
    "Science",
    "Technology",
    "Travel",
  ];
  return (
    <View>
      <Text style={s.sectionTitle}>
        Not sure what to read? Here are our favourite topics:
      </Text>
      {categories.map((category) => {
        return (
          <TouchableOpacity
            onPress={() => {
              getArticlesBySection(1, category.toLowerCase());
            }}
            key={category}
          >
            <View style={s.card}>
              <Text style={s.category}>{category.toUpperCase()}</Text>
              <Text style={s.arrow1}>&gt;</Text>
              <Text style={s.arrow2}>&gt;</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Categories;
