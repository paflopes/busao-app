import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import Home from './home';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} initial={true} title="Busão"/>
        </Scene>
      </Router>
    );
  }
}
