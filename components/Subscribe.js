import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import s from "../styles.js";

class Subscribe extends Component {
  state = { emailInput: "", emailError: null };

  handleChange(value) {
    this.setState({
      emailInput: value,
    });
    this.validate();
  }

  handleSubmit() {
    const { emailInput, emailError } = this.state;
    this.validate();
    if (emailError === null) {
      this.setState({ emailInput: "" });
      Alert.alert(
        "You have successfully subscribed.",
        "Thank you!",
        [
          {
            text: "Close",
            style: "cancel",
          },
        ],
        { cancelable: false }
      );
    }
  }

  validate() {
    const { emailInput } = this.state;
    if (emailInput === "") {
      this.setState({
        emailError: "Enter your email address first.",
      });
    } else {
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      regex.test(emailInput)
        ? this.setState({ emailError: null })
        : this.setState({ emailError: "Entered email address is invalid." });
    }
  }

  render() {
    const { emailInput, emailError } = this.state;
    return (
      <View>
        <Text style={s.sectionTitle}>
          Want more? Subscribe to our weekly newsletter:
        </Text>
        {emailError && (
          <Text style={{ alignSelf: "center" }}>{emailError}</Text>
        )}
        <View style={s.inputContainer}>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 20,
              marginLeft: 5,
            }}
          >
            ✉️
          </Text>
          <TextInput
            style={s.inputField}
            value={emailInput}
            placeholder="Email address..."
            keyboardType="email-address"
            onChangeText={(value) => {
              this.handleChange(value.toLowerCase());
            }}
          />
          <TouchableOpacity
            style={s.button}
            onPress={() => {
              this.handleSubmit();
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
      </View>
    );
  }
}

export default Subscribe;
