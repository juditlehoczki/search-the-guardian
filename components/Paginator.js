import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";

import s from "../styles.js";

const Paginator = (props) => {
  const { currentPage, pagesCount, changePage } = props;
  return (
    <View style={s.paginator}>
      <TouchableWithoutFeedback
        onPress={() => currentPage !== 1 && changePage(-1)}
      >
        <Text>&lt; </Text>
      </TouchableWithoutFeedback>
      <Text>{`${currentPage}/${pagesCount}`}</Text>
      <TouchableWithoutFeedback
        disabled={currentPage === pagesCount}
        onPress={() => currentPage !== pagesCount && changePage(1)}
      >
        <Text> &gt;</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Paginator;
