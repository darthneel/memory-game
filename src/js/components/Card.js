import React, { Component, PropTypes } from 'react';
import cx from 'classnames';

export default class ActiveCard extends Component {

  static propTypes = {
    suit: PropTypes.string,
    value: PropTypes.string,
    active: PropTypes.bool,
    matched: PropTypes.bool,
    onClick: PropTypes.func
  };

  getSuitClass(suit) {
    return `suit-${suit}`;
  }

  render() {
    const { suit, value, active, matched, onClick } = this.props;

    const suitClass = this.getSuitClass(suit);
    const classnames = cx(
      'column is-1 flip-container',
      {'flip matched-card': matched},
      {'flip': active}
    );

    return (
      <div className={classnames} onClick={onClick}>
        <div className="active-card flipper">
          <div className="card-front card-bg">
          </div>
          <div className={`card-back ${suitClass}`}>
              {value}
          </div>
        </div>
      </div>
    );
  }
}
