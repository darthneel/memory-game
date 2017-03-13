import React, { Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import { matchedPairs } from '../selectors';
import { hideMatchedPairModal } from '../actions';

@connect(
  (state) => {
    return {
      matchedPairs: matchedPairs(state)
    };
  },
  {
    hideMatchedPairModal
  }
)
export default class App extends Component {

  static propTypes = {
    matchedPairs: PropTypes.object,
    hideMatchedPairModal: PropTypes.func,
  };

  formatCardName(card) {
    return card.replace(/_/, ' of ').toUpperCase();
  }

  matchedPairsTable() {
    const { matchedPairs } = this.props;

    return (
      <table className="table">
        <tbody>
          {matchedPairs.map((pair, idx) => {
            return (
              <tr key={idx}>
                <td>{this.formatCardName(pair[0])}</td>
                <td>{this.formatCardName(pair[1])}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  render() {
    const { hideMatchedPairModal } = this.props;

    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="box">
            <h1 className="title">Matched Pairs</h1>
            {this.matchedPairsTable()}
          </div>
        </div>
        <button className="modal-close" onClick={hideMatchedPairModal}></button>
      </div>
    );
  }
}
