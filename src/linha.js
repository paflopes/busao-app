import React, {Component, PropTypes} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Style from './stylesheet';

export default class Linha extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {numero, nome} = this.props.data;
    return (
      <View style={styles.container}>
        <Text>{numero} | {nome}</Text>
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
    // borderWidth: 2,
    // borderColor: 'black',
  }
});


Linha.propTypes = {
  data: PropTypes.object
};
