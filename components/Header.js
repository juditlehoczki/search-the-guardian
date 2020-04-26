import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

import s from "../styles.js";

const Header = (props) => {
  const { refreshMainPage } = props;
  return (
    <View>
      <Text style={s.search}>search</Text>
      <TouchableOpacity
        onPress={() => {
          refreshMainPage();
        }}
      >
        <Image style={s.logo} source={require("../img/theguardian-logo.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
