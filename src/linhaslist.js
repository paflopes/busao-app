import React, {Component} from 'react';
import {Text, ListView, StyleSheet} from 'react-native';
import linhas from '../linhas.json';

export default class LinhasList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(linhas.map((x) => `${x.numero} ${x.nome}`))
    };

  }

  render() {
    return (
        <ListView
          style={styles.mainList}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}/>
    );
  }
}

const styles = StyleSheet.create({
  mainList: {
    flex: 1
  }
});
