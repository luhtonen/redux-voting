import React from 'react';

class Voting extends React.Component {
  getPair() {
    console.log('getPair ', this.props.pair);
    return this.props.pair || [];
  }

  render() {
    return (
      <div className="voting">
        {this.getPair().map(entry =>
          <button key={entry} onClick={() => this.props.vote(entry)}>
            <h1>{entry}</h1>
          </button>
        )}
      </div>
    );
  }
}

export default Voting;