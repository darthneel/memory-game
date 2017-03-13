import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import '../../css/index.scss';
import Header from './Header';
import GameBoard from './GameBoard';
import MatchedCardsModal from './MatchedCardsModal';
import GameWonModal from '../components/GameWonModal';
import { gameWon, showMatchedPairsModal } from '../selectors';
import { RIT } from '../utils';

@connect(
  (state) => {
    return {
      gameWon: gameWon(state),
      showMatchedPairsModal: showMatchedPairsModal(state)
    };
  },
  {}
)
export default class App extends Component {

  static propTypes = {
    gameWon: PropTypes.bool,
    showMatchedPairsModal: PropTypes.bool
  };

  render() {
    const { gameWon, showMatchedPairsModal } = this.props;

    return (
      <div className="App">
        <Header />
        <GameBoard />
        {RIT(gameWon, () => <GameWonModal />)}
        {RIT(showMatchedPairsModal, () => <MatchedCardsModal />)}
      </div>
    );
  }
}
