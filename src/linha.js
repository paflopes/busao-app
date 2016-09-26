import React, {Component, PropTypes} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';


import Style from './stylesheet';

export default class Linha extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {numero, nome} = this.props.data;
    const detail = () => Actions.detail({
      title: `${numero} - Itinerário`,
      data: this.props.data
    });

    return (
      <View style={styles.container}>
        <Text onPress={detail}>{numero} | {nome}</Text>
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


Linha.propTypes = {
  data: PropTypes.object
};
