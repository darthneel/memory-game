import { takeEvery, fork, put, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { selectedCardsCount, getSelectedCards, isGameOver } from '../selectors';
import {
  actionTypes,
  selectCard,
  markCardAsMatched,
  setMatchedPair,
  clearSelected,
  unselectCard,
  toggleGameWon
} from '../actions';

// -------------- Helper sagas to be composed when executing the main game sequence --------------
function* checkCardsForMatch() {
  const selectedCards = yield select((state) => getSelectedCards(state));
  const [card1, card2] = selectedCards.toJS();
  return card1[0] === card2[0];
}

function* handleMatchFound() {
  const selectedCards = yield select((state) => getSelectedCards(state));
  const [locator1, locator2] = selectedCards.toJS();

  // Delay for 1500 ms. This leave both cards visible to the user.
  yield delay(1500);

  yield put(markCardAsMatched({locator: locator1}));
  yield put(markCardAsMatched({locator: locator2}));
  yield put(setMatchedPair({locators: [locator1, locator2]}));
  yield put(clearSelected());
}

function* handleNoMatch() {
  const selectedCards = yield select((state) => getSelectedCards(state));
  const [locator1, locator2] = selectedCards.toJS();

  // Delay for 1500 ms. This leave both cards visible to the user.
  yield delay(1500);

  yield put(unselectCard({locator: locator1}));
  yield put(unselectCard({locator: locator2}));
  yield put(clearSelected());
}

// -------------- Main game sequence that is run when a user clicks on a card --------------
function* gameSequence({locator}) {

  // Doing this to 'debounce' spamming of clicks
  const cardCount = yield select((state) => selectedCardsCount(state));
  if (cardCount > 1 ) {
    return;
  }

  // Dispatch action to update store to mark the selected as {active: true}
  yield put(selectCard({locator}))

  // We only want to proceed with game logic if two cards have been selected
  const shouldCheckCards = yield select((state) => selectedCardsCount(state) === 2);
  if (shouldCheckCards) {

    // Check for matches and execute saga for corresponding behavior
    const matchFound = yield* checkCardsForMatch();
    if (matchFound) {
      yield* handleMatchFound();
    } else {
      yield* handleNoMatch();
    }
  } else {
    return;
  }

  // If game is won a modal will displayed
  const gameOver = yield select((state) => isGameOver(state));
  if (gameOver) {
    yield put(toggleGameWon());
  }
}

// -------------- Watcher function to execute main game sequence --------------
function* watchSelectCard() {
  yield takeEvery(actionTypes.START_GAME_SEQUENCE, gameSequence);
}

// -------------- Exporting the root saga for integration with the store --------------
export default function* root() {
  yield [
    fork(watchSelectCard)
  ];
}