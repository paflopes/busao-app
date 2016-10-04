import React, {PropTypes} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

import Style from './stylesheet';

export default class Itinerario extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const header = (category) => (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{category.toUpperCase()}</Text>
      </View>
    );

    const {ida, volta} = this.props.data.caminho;

    return (
      <ScrollView style={styles.container}>
        {header('I D A')}
        <Text>
          {ida.reduce((p, c) => `${p}\n${c}`, '')}
        </Text>
        {header('V O L T A')}
        <Text>
          {volta.reduce((p, c) => `${p}\n${c}`, '')}
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 54,
    flexDirection: 'column'
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: Style.GRAY,
    paddingLeft: Style.UNIT,
    marginVertical: 20
  },
  headerText: {
    fontWeight: 'bold'
  }
});


Itinerario.propTypes = {
  data: PropTypes.object
};
