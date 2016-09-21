import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';

import SearchBox from './searchbox';
import LinhasList from './linhaslist';

export default class Home extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container} refreshing>
        <SearchBox />
        <LinhasList/>
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
