export const actionTypes = {
  START_GAME_SEQUENCE: 'START_GAME_SEQUENCE',
  SELECT_CARD: 'SELECT_CARD',
  UNSELECT_CARD: 'UNSELECT_CARD',
  MARK_CARD_AS_MATCHED: 'MARK_CARD_AS_MATCHED',
  SET_MATCHED_PAIR: 'SET_MATCHED_PAIR',
  CLEAR_SELECTED: 'CLEAR_SELECTED',
  TOGGLE_GAME_WON: 'TOGGLE_GAME_WON',
  SHOW_MATCHED_PAIRS_MODAL: 'SHOW_MATCHED_PAIRS_MODAL',
  HIDE_MATCHED_PAIRS_MODAL: 'HIDE_MATCHED_PAIRS_MODAL'
};

export function startGameSequence({locator}) {
  return {
    type: actionTypes.START_GAME_SEQUENCE,
    locator
  };
}

export function selectCard({locator}) {
  return {
    type: actionTypes.SELECT_CARD,
    locator
  };
}

export function unselectCard({locator}) {
  return {
    type: actionTypes.UNSELECT_CARD,
    locator
  };
}

export function markCardAsMatched({locator}) {
  return {
    type: actionTypes.MARK_CARD_AS_MATCHED,
    locator
  };
}

export function setMatchedPair({locators}) {
  return {
    type: actionTypes.SET_MATCHED_PAIR,
    locators
  };
}

export function clearSelected() {
  return {
    type: actionTypes.CLEAR_SELECTED
  };
}

export function toggleGameWon() {
  return {
    type: actionTypes.TOGGLE_GAME_WON
  };
}

export function showMatchedPairModal() {
  return {
    type: actionTypes.SHOW_MATCHED_PAIRS_MODAL
  };
}

export function hideMatchedPairModal() {
  return {
    type: actionTypes.HIDE_MATCHED_PAIRS_MODAL
  };
}
