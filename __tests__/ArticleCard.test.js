import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {TouchableOpacity, Linking} from 'react-native';

import ArticleCard from '../components/ArticleCard.js';

const props = {
  result: {
    webTitle: '',
    webPublicationDate: '',
    sectionName: '',
    webUrl: '',
    fields: {
      thumbnail: '',
      trailText: '',
    },
  },
};

describe('ArticleCard Component', () => {
  test('Snapshot - it renders correctly', () => {
    const snapshot = renderer.create(<ArticleCard {...props} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test('Tapping on the ArticleCard calls Linking.openURL function', () => {
    const fakeArticleCard = renderer.create(<ArticleCard {...props} />);
    const article = fakeArticleCard.root.findByType(TouchableOpacity);
    article.props.onPress();
    expect(Linking.openURL).toHaveBeenCalled();
  });
});
