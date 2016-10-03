import React, {Component, PropTypes} from 'react';
import {View, StyleSheet} from 'react-native';

import SearchBox from './searchbox';
import LinhasList from './linhaslist';

export default class Home extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBox />
        <LinhasList />
      </View>
    );
  }
}

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
