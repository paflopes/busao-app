import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import Home from './home';
import Detail from './detail';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} initial={true} title="Busão"/>
          <Scene key="detail" component={Detail} initial={false} title="Itinerário"/>
        </Scene>
      </Router>
    );
  }
}
