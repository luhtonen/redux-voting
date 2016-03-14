import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class Results extends React.Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    return (
      <div>Results</div>
    )
  }
}

export default Results;