import { fromJS } from 'immutable';
import { actionTypes } from '../actions';

const initialState = fromJS({
  gameWon: false,
  showMatchedPairsModal: false
});

export default function app(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.TOGGLE_GAME_WON:
      return state.merge({gameWon: true});
    case actionTypes.SHOW_MATCHED_PAIRS_MODAL:
      return state.merge({showMatchedPairsModal: true});
    case actionTypes.HIDE_MATCHED_PAIRS_MODAL:
      return state.merge({showMatchedPairsModal: false});
  default:
    return state;
  }
}
