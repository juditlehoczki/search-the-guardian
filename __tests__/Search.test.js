import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {TextInput, TouchableOpacity} from 'react-native';

import Search from '../components/Search.js';

let fakeHandleChange;
let fakeGetArticles;
let props;

describe('Search Component', () => {
  beforeEach(() => {
    fakeHandleChange = jest.fn();
    fakeGetArticles = jest.fn();
    props = {
      handleChange: fakeHandleChange,
      searchInput: '',
      getArticles: fakeGetArticles,
    };
  });

  test('Snapshot - it renders correctly', () => {
    const snapshot = renderer.create(<Search {...props} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test('Search input field: calls handleChange function when text changes', () => {
    const fakeSearch = renderer.create(<Search {...props} />);
    const inputField = fakeSearch.root.findByType(TextInput);
    inputField.props.onChangeText('cycling');
    expect(fakeHandleChange).toHaveBeenCalledWith('cycling');
  });

  test('Go! button: calls getArticles function when pressed', () => {
    props.searchInput = 'cycling';
    const fakeSearch = renderer.create(<Search {...props} />);
    const button = fakeSearch.root.findByType(TouchableOpacity);
    button.props.onPress();
    expect(fakeGetArticles).toHaveBeenCalled();
  });
});
