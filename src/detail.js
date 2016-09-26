import React, {PropTypes} from 'react';
import {ListView, StyleSheet, View, Text} from 'react-native';

import Style from './stylesheet';
import Rua from './rua';

export default class Detail extends React.Component {

  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });
    const {caminho} = this.props.data;

    const ruas = {'i d a': caminho.ida, 'v o l t a': caminho.volta};

    this.state = {
      caminho: ds.cloneWithRowsAndSections(ruas)
    };
  }

  render() {
    const separator = (sectionID, rowID) =>(
      <View key={`${sectionID}-${rowID}`} style={styles.separator}/>
    );

    const header = (sectionData, category) => (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{category.toUpperCase()}</Text>
      </View>
    );

    return (
      <View style={styles.container}>
        <ListView
          initialListSize={1}
          style={styles.mainList}
          dataSource={this.state.caminho}
          renderSectionHeader={header}
          renderRow={(rowData) => <Rua nome={rowData}/>}
          renderSeparator={separator}
        />
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
  },
  mainList: {
    flex: 1,
    width: Style.CARD_WIDTH
  },
  separator: {
    height: 10,
    backgroundColor: Style.WHITE
  }
});


Detail.propTypes = {
  data: PropTypes.object
};
