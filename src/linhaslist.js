import React, {Component, PropTypes} from 'react';
import {ListView, StyleSheet, View} from 'react-native';

import Style from './stylesheet';
import Linha from './linha';

export default class LinhasList extends Component {
  constructor(props) {
    super(props);

    const {linhas} = this.props;
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.state = {
      dataSource: ds.cloneWithRows(linhas.map((e) => {
        e.key = e.numero;
        return e;
      }))
    };

  }

  render() {
    return (
        <ListView
          initialListSize={1}
          style={styles.mainList}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Linha data={rowData} />}
          renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
        />
    );
  }
}

const styles = StyleSheet.create({
  mainList: {
    flex: 1,
    width: Style.CARD_WIDTH
  },
  separator: {
    height: 10,
    backgroundColor: Style.WHITE
  }
});

LinhasList.propTypes = {linhas: PropTypes.array};
LinhasList.defaultProps = {linhas: []};
