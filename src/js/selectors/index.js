export const cardDeck = state => state.getIn(['cards', 'deck']);
export const gameWon = (state) => state.getIn(['app', 'gameWon']);
export const isGameOver = (state) => state.getIn(['cards', 'matchedPairs']).size === 26;
export const selectedCardsCount = (state) => state.getIn(['cards', 'selected']).size;
export const getSelectedCards = (state) => state.getIn(['cards', 'selected']);
export const matchedPairs = (state) => state.getIn(['cards', 'matchedPairs']);
export const matchedPairCount = (state) => state.getIn(['cards', 'matchedPairs']).size;
export const showMatchedPairsModal = (state) => state.getIn(['app', 'showMatchedPairsModal']);
