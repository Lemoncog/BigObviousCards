var React = require('react');
var ClientSelectView = require('./ClientSelectView');
var DetailView = require('./DetailView');
var LoginForm = require('./LoginForm');

module.exports = React.createClass({
  handleChange: function() {
  },
  render: function() {
    return (
    	<div className="HomeView">
          <h1>TrackCare</h1>
          <b>Welcomes {this.props.userModel.get('name')} </b><div></div>
          <ClientSelectView />
          <DetailView />
      </div> 
    );
  }
});