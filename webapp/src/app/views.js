var LoginForm = React.createClass({
  handleChange: function() {

  },
  handleClick: function() {
  	console.log("Clicky click");
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
	    		<button id="submit" className="button buttonBlue" onClick={this.handleClick}>Submit</button>
	    	</div>
    	</div>
    );
  }
});

React.render(
  <LoginForm />,
  document.getElementById('hello_holder')
);