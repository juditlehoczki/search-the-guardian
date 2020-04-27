import React from "react";
import "react-native";
import renderer from "react-test-renderer";

import Subscribe from "../components/Subscribe.js";

describe("Subscribe Component", () => {
  beforeEach(() => {
    fakeHandleChange = jest.fn();
    fakeHandleSubmit = jest.fn();
    fakeValidate = jest.fn();
  });
  test("Snapshot - it renders correctly", () => {
    const snapshot = renderer.create(<Subscribe />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test("handleChange method works as expected - sets the emailInput state correctly", () => {
    const fakeSubscribe = renderer.create(<Subscribe />).getInstance();
    fakeSubscribe.handleChange("lehoczki.judit@gmail.com");
    expect(fakeSubscribe.state.emailInput).toEqual("lehoczki.judit@gmail.com");
  });
});
