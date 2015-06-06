var React = require('react');

module.exports = React.createClass({
  handleChange: function() {

  },
  handleLogin: function() {
  	console.log("Clicky click");
    this.props.submissionHandler.onSubmit();
    /*Would usually call an API and login here, but we will just move onto next page*/
  },
  render: function() {
    return (
    	<div className="LoginForm">
	    	<div className="group">
	      		<input id="username" type="text" placeholder="Username"/>
	      	</div>
	      	<div className="group">
	      		<input id="password" type="password" placeholder="Password" onChange={this.handleChange}/>
	    	</div>
	    	<div>
	    		<button id="submit" className="button buttonBlue" onClick={this.handleLogin}>Submit</button>
	    	</div>
    	</div>
    );
  }
});