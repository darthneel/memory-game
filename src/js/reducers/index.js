import { combineReducers } from 'redux-immutable';
import app from './app';
import cards from './cards';

const appReducer = combineReducers({
  app,
  cards
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined
  }

  return appReducer(state, action)
}
export default rootReducer;
