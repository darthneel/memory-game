##Memory Game

Interactive version of the classic Memory card game.

<img src="http://g.recordit.co/DxB5Euns9k.gif" width="600">

**Core technologies used:**
 - [React.js](https://facebook.github.io/react/)
 - [Redux](http://redux.js.org/)
 - [Immutable.js](https://facebook.github.io/immutable-js/)
 - [Redux Saga](https://github.com/redux-saga/redux-saga)
 - [Bulma](http://bulma.io/) CSS framework based
 - Modern JavaScript w/ [Babel](https://babeljs.io/)

###Node/NPM Versions

This project uses **node v7.6.0** and **npm v4.1.2**

###Getting Started

Install the correct Node version if you do not already have it
- `nvm ls` will list installed Node versions
- `nvm install` will install the preferred Node version in the `.nvmrc`

Switch to the correct Node version
- `nvm use`

Now that we using the correct Node version, lets install our Node modules
- `npm i`

Lastly, lets kick up a server on `http://localhost:3000/` with the game
- `npm start`
- A browser window should open automatically but if it doesnt, proceed to `http://localhost:3000/`

###Notes

The core of the game logic can be found in the `cards` reducer and the root saga
 - `src/js/reducers/card.js`
 - `src/js/sagas/index.js`

The top level React component is `App`. Full Component Tree:
 - *App* - `src/js/containers/App.js`
   - *Header* - `src/js/containers/Header.js`
   - *Gameboard* - `src/js/containers/Gameboard.js`
     - *Card* - `src/js/components/Card.js`
   - *MatchedCardsModal* (conditionally rendered)- `src/js/containers/MatchedCardsModal.js`
   - *GameWonModal* (conditionally rendered)- `src/js/component/GameWonModal.js`
