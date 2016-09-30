import React, {Component, PropTypes} from 'react';
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

    this.updateLinhas = this.updateLinhas.bind(this);
  }

  updateLinhas(query) {
    const result = this.props.fuse.search(query);

    this.setState({linhas: result});
  }

  render() {
    return (
      <View style={styles.container} refreshing>
        <SearchBox updateLinhas={this.updateLinhas} />
        <LinhasList linhas={this.state.linhas} />
      </View>
    );
  }
}

const options = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  keys: [
    {name: "numero", weight: 0.4},
    {name: "nome", weight: 0.4},
    {name: "caminho.ida", weight: 0.1},
    {name: "caminho.volta", weight: 0.1},
  ]
};

Home.defaultProps = {
  fuse: new Fuse(linhas, options)
};

Home.propTypes = {
  fuse: PropTypes.object
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 54,
    flexDirection: 'column',
    alignItems: 'center'
  }
});
