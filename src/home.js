import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

import SearchBox from './searchbox';
import LinhasList from './linhaslist';

export default class Home extends Component {

  constructor() {
    super();
  }

  render() {
    const {width, height} = Dimensions.get('window');

    return (
      <View style={[styles.container, {height: height - 54}]} refreshing>
        <View style={{width: width - 40, flex: 1}} refreshing>
          <SearchBox />
          <LinhasList/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
