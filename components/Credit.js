import React from "react";
import { Text, TouchableOpacity, Linking } from "react-native";

import s from "../styles.js";

const Credit = () => {
  return (
    <TouchableOpacity>
      <Text
        style={s.credit}
        onPress={() => {
          Linking.openURL("http://juditlehoczki.me");
        }}
      >
        Developed With 💛 By Judit Lehoczki
      </Text>
    </TouchableOpacity>
  );
};

export default Credit;
