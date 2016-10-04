import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Home from './home';
import Itinerario from './itinerario';
import allReducers from './reducers';

const store = createStore(allReducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Scene key="root">
            <Scene key="home" component={Home} initial={true}
            title="Busão"
            rightTitle="Atualizar"
            onRight={() => {}}
            />
            <Scene key="itinerario" component={Itinerario} initial={false} title="Itinerário" />
          </Scene>
        </Router>
      </Provider>
    );
  }
}
