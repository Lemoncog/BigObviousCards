var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className="DetailView">
        <b>is being cared for by {this.props.clientModel.get('carerName')}</b>
      </div>
    );
  }
})  