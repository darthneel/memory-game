import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card';
import { startGameSequence } from '../actions';
import { cardDeck } from '../selectors';

@connect(
  (state) => {
    return {
      cardDeck: cardDeck(state)
    };
  },
  {
    startGameSequence
  }
)
export default class GameBoard extends Component {

  static propTypes = {
    cardDeck: PropTypes.object,
    startGameSequence: PropTypes.func
  };

  render() {
    const { cardDeck, startGameSequence } = this.props;

    return (
      <div className="container top-margin">
        <div className="gameboard columns is-multiline">
          {cardDeck.valueSeq().map((card, i) => {
            const { suit, value, active, matched } = card.toJS();
            const locator = `${value}_${suit}`;

            return <Card
              key={i}
              locator={locator}
              suit={suit}
              value={value}
              active={active}
              matched={matched}
              onClick={() => {
                  if (!active) {
                    startGameSequence({locator})
                  }
                }
              }
            />;
          })}
        </div>
      </div>
    );
  }
}
