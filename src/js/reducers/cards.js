// Have to do this because eslint is throwing an error in the
// switch statement because multiple cases in the switch are
// using the same variable names.
/* eslint no-redeclare: 0 */

import { Map, OrderedMap, List, fromJS } from 'immutable';
import { cardDeck } from '../utils';
import { shuffle, map } from 'lodash';
import { actionTypes } from '../actions';

const OrderedMapOfCards = () => {
  const shuffledCards = shuffle(cardDeck);
  const cardTuples = map(shuffledCards, (card) => {
    const key = `${card.value}_${card.suit}`;
    return [key, fromJS(card)];
  });

  return new OrderedMap(cardTuples);
}

const initialState = new Map()
  .set('deck', OrderedMapOfCards())
  .set('selected', new List([]))
  .set('matchedPairs', new List([]));

export default function app(state = initialState, action = {}) {
  switch (action.type) {
    case actionTypes.SELECT_CARD:
      var { locator } = action;
      var selected = state.get('selected');
      const updatedSelected = selected.push(locator);

      return state
        .mergeIn(['deck', locator], {active: true})
        .set('selected', updatedSelected);
    case actionTypes.UNSELECT_CARD:
      var { locator } = action;
      var selected = state.get('selected');

      return state.mergeIn(['deck', locator], {active: false})
    case actionTypes.MARK_CARD_AS_MATCHED:
      var { locator } = action;

      return state.mergeIn(['deck', locator], {matched: true});
    case actionTypes.SET_MATCHED_PAIR:
      var { locators } = action;
      const matchedPairs = state.get('matchedPairs');

      return state.set('matchedPairs', matchedPairs.push(locators));
    case actionTypes.CLEAR_SELECTED:
      var selected = state.get('selected');

      return state.set('selected', selected.clear());
    default:
      return state;
  }
}
