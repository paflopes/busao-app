import React, {Component} from 'react';
import {Text, ListView, View, Dimensions} from 'react-native';
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
    const {height} = Dimensions.get('window');

    return (
        <ListView
          style={{flex: 1}}
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData}</Text>}/>
    );
  }
}

// LinhasList.propTypes = {   linhas: PropTypes.array };
