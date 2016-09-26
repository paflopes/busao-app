import React, {PropTypes} from 'react';
import {Text, StyleSheet, View} from 'react-native';

import Style from './stylesheet';

export default class Rua extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.props.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: 50,
    backgroundColor: Style.GRAY,
    paddingLeft: Style.UNIT
  }
});

Rua.propTypes = {
  nome: PropTypes.string
};
