import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Winner from './Winner';
import Vote from './Vote';

class Voting extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return <div>
      {this.props.winner ?
        <Winner ref="winner" winner={this.props.winner} /> :
        <Vote {...this.props} />
      }
    </div>
  }
}

export default Voting;