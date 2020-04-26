import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import {TouchableWithoutFeedback, Text} from 'react-native';

import Paginator from '../components/Paginator.js';

let fakeChangePage;
let props;

describe('Paginator Component', () => {
  beforeEach(() => {
    fakeChangePage = jest.fn();
    props = {
      pagesCount: 2,
      currentPage: 1,
      changePage: fakeChangePage,
    };
  });

  test('Snapshot - it renders correctly', () => {
    const snapshot = renderer.create(<Paginator {...props} />).toJSON();
    expect(snapshot).toMatchSnapshot();
  });

  test('Current page and number of total pages are rendered correctly', () => {
    const fakePaginator = renderer.create(<Paginator {...props} />);
    const text = fakePaginator.root.findAllByType(Text);
    expect(text[1].props.children).toBe(
      `${props.currentPage}/${props.pagesCount}`,
    );
  });

  test('Previous button: calls changePage function when pressed and have previous pages available', () => {
    const fakePaginator = renderer.create(
      <Paginator {...props} currentPage={2} />,
    );
    const buttons = fakePaginator.root.findAllByType(TouchableWithoutFeedback);
    buttons[0].props.onPress();
    expect(fakeChangePage).toHaveBeenCalledWith(-1);
  });
  test('Previous button: does not call changePage function when pressed when there are no previous pages', () => {
    const fakePaginator = renderer.create(<Paginator {...props} />);
    const buttons = fakePaginator.root.findAllByType(TouchableWithoutFeedback);
    buttons[0].props.onPress();
    expect(fakeChangePage).not.toHaveBeenCalled();
  });

  test('Next button: calls changePage function when pressed and have further pages available', () => {
    const fakePaginator = renderer.create(<Paginator {...props} />);
    const buttons = fakePaginator.root.findAllByType(TouchableWithoutFeedback);
    buttons[1].props.onPress();
    expect(fakeChangePage).toHaveBeenCalledWith(1);
  });
  test('Next button: does not call changePage function when pressed when there are no further pages', () => {
    const fakePaginator = renderer.create(
      <Paginator {...props} currentPage={2} />,
    );
    const buttons = fakePaginator.root.findAllByType(TouchableWithoutFeedback);
    buttons[1].props.onPress();
    expect(fakeChangePage).not.toHaveBeenCalled();
  });
});
