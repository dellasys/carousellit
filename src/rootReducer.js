import { combineReducers } from 'redux';
import topics from './postTopic/reducer';

const rootReducer = combineReducers({
  topics,
});

export default rootReducer;
