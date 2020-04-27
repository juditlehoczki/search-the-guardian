import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import s from "../styles.js";

class Subscribe extends Component {
  state = { emailInput: "", emailError: null };

  handleChange(value) {
    this.setState({
      emailInput: value,
    });
    this.validate(value);
  }

  handleSubmit() {
    const { emailInput, emailError } = this.state;
    if (emailInput === "") {
      this.setState({ emailError: "Enter your email address first." });
    } else if (emailError === null) {
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

  validate(value) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    regex.test(value)
      ? this.setState({ emailError: null })
      : this.setState({ emailError: "Please enter a valid email address." });
  }

  render() {
    const { emailInput, emailError } = this.state;
    return (
      <View>
        <Text style={s.sectionTitle}>
          Want more? Subscribe to our weekly newsletter:
        </Text>
        {emailError && <Text style={s.errorMsg}>{emailError}</Text>}
        <View style={s.inputContainer}>
          <Text style={s.icon}>✉️</Text>
          <TextInput
            style={[emailError ? s.inputFieldInvalid : s.inputField]}
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
            <Text style={s.buttonText}>Go!</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Subscribe;
