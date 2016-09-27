import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import Fuse from 'fuse.js';

import linhas from '../linhas.json';

import SearchBox from './searchbox';
import LinhasList from './linhaslist';

export default class Home extends Component {

  constructor() {
    super();

    this.state = {
      linhas
    };

    this.updateLinhas.bind(this);
  }

  updateLinhas(query) {
    const options = {
      shouldSort: true,
      threshold: 0.6,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      keys: [
        "title",
        "author.firstName"
      ]
    };

    const fuse = new Fuse(this.state.linhas, options);
    const result = fuse.search(query);

    this.setState({linhas: result});
  }

  render() {
    return (
      <View style={styles.container} refreshing>
        <SearchBox />
        <LinhasList linhas={this.state.linhas} updateLinhas={this.updateLinhas} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 54,
    flexDirection: 'column',
    alignItems: 'center'
  }
});
