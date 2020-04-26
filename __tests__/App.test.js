import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import axios from 'axios';
import {mockResponse} from './testData/apiResponseMock.js';

import App from '../App.js';

jest.mock('axios');
axios.get.mockImplementation(() => Promise.resolve(mockResponse));

describe('App Component', () => {
  test('Snapshot - it renders correctly', () => {
    const appSnapShot = renderer.create(<App />).toJSON();
    expect(appSnapShot).toMatchSnapshot();
  });
  test('componentDidMount puts 5 articles in the fiveNewestArticles state', async () => {
    let mockApp = renderer.create(<App />).getInstance();
    await mockApp.componentDidMount;
    expect(mockApp.state.fiveNewestArticles.length).toEqual(5);
  });
  test("handleChange method sets the searchInput state based on the argument it's called with", () => {
    let mockApp = renderer.create(<App />).getInstance();
    mockApp.handleChange('cycling');
    expect(mockApp.state.searchInput).toEqual('cycling');
  });
  test('changePage method works as expected - sets the currentPage state correctly', () => {
    let mockApp = renderer.create(<App />).getInstance();
    mockApp.changePage(1);
    expect(mockApp.state.currentPage).toEqual(2);
    mockApp.changePage(-1);
    expect(mockApp.state.currentPage).toEqual(1);
  });
  test('getArticles puts articles in the articles state', async () => {
    let mockApp = renderer.create(<App />).getInstance();
    await mockApp.getArticles(1, 'Cycling');
    expect(mockApp.state.articles.length).toEqual(5);
  });
  test('getArticlesBySection puts articles in the articles state', async () => {
    let mockApp = renderer.create(<App />).getInstance();
    await mockApp.getArticlesBySection('news');
    expect(mockApp.state.articles.length).toEqual(5);
  });
  test('refreshMainPage sets the articlesNotYetRequested state to true', () => {
    let mockApp = renderer.create(<App />).getInstance();
    mockApp.state.articlesNotYetRequested = false;
    mockApp.refreshMainPage();
    expect(mockApp.state.articlesNotYetRequested).toEqual(true);
  });
});
