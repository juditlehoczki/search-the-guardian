import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {TouchableOpacity} from 'react-native';

import Header from '../components/Header.js';

let fakeRefreshMainPage;
let props;

describe('Header Component', () => {
  beforeEach(() => {
    fakeRefreshMainPage = jest.fn();
    props = {
      refreshMainPage: fakeRefreshMainPage,
    };
  });

  test('Snapshot - it renders correctly', () => {
    const snapshot = renderer.create(<Header />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test('Image: on press it calls refreshMainPage function', () => {
    const fakeHeader = renderer.create(<Header {...props} />);
    const image = fakeHeader.root.findByType(TouchableOpacity);
    image.props.onPress();
    expect(fakeRefreshMainPage).toHaveBeenCalled();
  });
});
