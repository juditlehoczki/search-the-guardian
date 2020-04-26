import React from "react";
import "react-native";
import renderer from "react-test-renderer";
import { TouchableOpacity } from "react-native";

import Categories from "../components/Categories.js";

const fakeGetArticlesBySection = jest.fn();
const props = {
  getArticlesBySection: fakeGetArticlesBySection,
};

describe("Categories Component", () => {
  test("Snapshot - it renders correctly", () => {
    const snapshot = renderer.create(<Categories {...props} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test("When a category is pressed it calls getArticlesBySection function", () => {
    const fakeCategories = renderer.create(<Categories {...props} />);
    const categoryCards = fakeCategories.root.findAllByType(TouchableOpacity);
    categoryCards[0].props.onPress();
    expect(fakeGetArticlesBySection).toHaveBeenCalled();
  });
});
