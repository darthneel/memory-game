import React, { Component } from 'react';

export default class ActiveCard extends Component {
  render() {
    return (
      <div className="modal is-active">
        <div className="modal-background"></div>
        <div className="modal-content">
          <div className="box">
            <h1 className="title">Congratulations on winning the match game!</h1>
          </div>
        </div>
      </div>
    );
  }
}
