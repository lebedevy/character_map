import { combineReducers } from 'redux';
import characters from './characters';
import events from './events';

export default combineReducers({ characters, events });
