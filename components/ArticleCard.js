import React from "react";
import {
  View,
  Text,
  Linking,
  Image,
  Row,
  TouchableOpacity,
} from "react-native";
import moment from "moment";
import s from "../styles.js";

const Card = (props) => {
  const { webTitle, webPublicationDate, sectionName, webUrl } = props.result;
  const { thumbnail, trailText } = props.result.fields;

  return (
    <TouchableOpacity
      onPress={() => {
        Linking.openURL(webUrl);
      }}
    >
      <View style={s.card}>
        <Image
          style={s.thumbnail}
          source={{
            uri: thumbnail,
          }}
        />
        <View style={s.intro}>
          <Text style={s.articleTitle}>{`${webTitle}`}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text>{`${moment(webPublicationDate).format("DD-MM-YYYY")}`}</Text>
            <Text> in</Text>
            <Text style={s.date}> {sectionName}</Text>
          </View>
          <Text>{`${trailText}...`}</Text>
        </View>
        <Text style={s.more}>&gt;</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
