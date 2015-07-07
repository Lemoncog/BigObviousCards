var React = require('react');

module.exports = React.createClass({
  handleChange: function() {
  },
  render: function() {
    return (
    	<div className="VisualInfoView col-centered">
    	<div className="redbox infoheader">
    		<h2 className="wordwrap">com.uk.lollip.bdd.WhenBlahDoesBlahThenItWhat</h2>
    		<h3>Fail reason goes here</h3>
    	</div>
    	<div>
       		<img src="http://lorempixel.com/600/800/"/>
      	</div>
      </div> 
    );
  }
});