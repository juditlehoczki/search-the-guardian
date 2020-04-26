import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import s from "../styles.js";

const Paginator = (props) => {
  const { currentPage, pagesCount, changePage } = props;
  return (
    <View style={s.paginator}>
      <TouchableOpacity onPress={() => currentPage !== 1 && changePage(-1)}>
        <Text style={s.pageChangerButton}>&lt;</Text>
      </TouchableOpacity>
      <Text style={s.pages}>{`${currentPage}/${pagesCount}`}</Text>
      <TouchableOpacity
        disabled={currentPage === pagesCount}
        onPress={() => currentPage !== pagesCount && changePage(1)}
      >
        <Text style={s.pageChangerButton}>&gt;</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Paginator;
