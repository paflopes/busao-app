import {combineReducers} from 'redux';
import reducerLinhas from './reducerLinhas';

const allReducers = combineReducers({
  linhas: reducerLinhas
});

export default allReducers;
