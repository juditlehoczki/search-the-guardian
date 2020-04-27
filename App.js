import React, { Component } from "react";
import {
  ScrollView,
  View,
  Text,
  Linking,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { fetchArticles } from "./api.js";
import Card from "./components/ArticleCard.js";
import Categories from "./components/Categories.js";
import Paginator from "./components/Paginator.js";
import Header from "./components/Header.js";
import Search from "./components/Search.js";
import Subscribe from "./components/Subscribe.js";

import s from "./styles.js";

import { YellowBox } from "react-native";
YellowBox.ignoreWarnings([
  "VirtualizedLists should never be nested", // TODO: Remove when fixed
]);

export default class App extends Component {
  state = {
    searchInput: "",
    lastSearch: "",
    lastSection: "",
    fiveNewestArticles: [],
    articles: [],
    resultsCount: 0,
    currentPage: 1,
    pagesCount: 0,
    articlesNotYetRequested: true,
  };

  componentDidMount() {
    this.getFiveNewestArticles();
  }

  getFiveNewestArticles() {
    fetchArticles(1, null, null, "newest", 5).then((res) => {
      const { results } = res.data.response;
      this.setState({
        fiveNewestArticles: results,
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    this.scroll.scrollTo({
      x: 0,
      y: 0,
      animated: true,
    });
    const { currentPage, lastSearch, lastSection } = this.state;
    if (prevState.currentPage !== currentPage) {
      if (lastSearch) {
        this.getArticles(currentPage, lastSearch);
      }
      if (lastSection) {
        this.getArticlesBySection(currentPage, lastSection);
      }
    }
  }

  handleChange(value) {
    this.setState({
      searchInput: value,
    });
  }

  changePage(change) {
    this.setState({
      currentPage: this.state.currentPage + change,
    });
  }

  refreshMainPage() {
    this.setState({
      articlesNotYetRequested: true,
    });
  }

  getArticles(page, keyword) {
    fetchArticles(page, keyword).then((res) => {
      const { results, total, currentPage, pages } = res.data.response;
      this.setState({
        articles: results,
        resultsCount: total,
        currentPage: currentPage,
        pagesCount: pages,
        articlesNotYetRequested: false,
        lastSection: "",
        lastSearch: keyword,
        searchInput: "",
      });
    });
  }

  getArticlesBySection(page, section) {
    fetchArticles(page, null, section, "newest", 10).then((res) => {
      const { results, total, currentPage, pages } = res.data.response;
      this.setState({
        articles: results,
        resultsCount: total,
        currentPage: currentPage,
        pagesCount: pages,
        articlesNotYetRequested: false,
        lastSearch: "",
        lastSection: section,
      });
    });
  }

  render() {
    const {
      searchInput,
      articlesNotYetRequested,
      articles,
      fiveNewestArticles,
      currentPage,
      pagesCount,
      resultsCount,
    } = this.state;

    return (
      <ScrollView
        ref={(top) => {
          this.scroll = top;
        }}
        contentContainerStyle={s.body}
        keyboardShouldPersistTaps="handled"
        contentInsetAdjustmentBehavior="automatic"
      >
        <View>
          <Header refreshMainPage={this.refreshMainPage.bind(this)} />
          <Search
            handleChange={this.handleChange.bind(this)}
            searchInput={searchInput}
            getArticles={this.getArticles.bind(this)}
          />
          {articlesNotYetRequested ? (
            <View>
              <Text style={s.sectionTitle}>Most Recent:</Text>
              <FlatList
                data={fiveNewestArticles}
                renderItem={({ item }) => {
                  return <Card result={item} />;
                }}
              />
              <Categories
                getArticlesBySection={this.getArticlesBySection.bind(this)}
              />
            </View>
          ) : (
            <View>
              <Text style={s.sectionTitle}>
                A total of {resultsCount} articles found.
              </Text>
              <Paginator
                currentPage={currentPage}
                pagesCount={pagesCount}
                changePage={this.changePage.bind(this)}
              />
              <View style={{ width: "100%" }}>
                <FlatList
                  data={articles}
                  renderItem={({ item }) => {
                    return <Card result={item} />;
                  }}
                />
              </View>
              <Paginator
                currentPage={currentPage}
                pagesCount={pagesCount}
                changePage={this.changePage.bind(this)}
              />
            </View>
          )}
        </View>
        <Subscribe />
        <TouchableOpacity>
          <Text
            style={s.credit}
            onPress={() => {
              Linking.openURL("http://juditlehoczki.me");
            }}
          >
            Developed With 💛 By Judit Lehoczki
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}
