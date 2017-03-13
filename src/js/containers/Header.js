import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { matchedPairCount } from '../selectors';
import { showMatchedPairModal } from '../actions';

@connect(
  (state) => {
    return {
      matchedPairCount: matchedPairCount(state)
    };
  },
  {
    showMatchedPairModal
  }
)
export default class Header extends Component {
  static propTypes = {
    matchedPairCount: PropTypes.number,
    showMatchedPairModal: PropTypes.func
  };

  render() {
    const { matchedPairCount, showMatchedPairModal } = this.props;

    return (
      <header className="nav has-shadow">
        <div className="container">
          <div className="nav-left">
            <div className="nav-item">
              <h2 className="title">Memory Game</h2>
            </div>
          </div>
          <div className="nav-right nav-menu">
            <div className="nav-item">
              <strong>Matches Found: {matchedPairCount}</strong>
            </div>
            <div className="nav-item">
              <a className="button is-outlined" onClick={showMatchedPairModal}>Matched Pairs</a>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
