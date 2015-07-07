var React = require('react');

module.exports = React.createClass({
  handleChange: function() {
  },
  render: function() {
    return (
    	<div className="HomeView col-centered" >
          <h1>Hello World</h1>
          <b>Welcomes {this.props.userModel.get('name')} </b><div></div>
      </div> 
    );
  }
});