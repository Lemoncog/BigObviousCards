var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('lodash');
Backbone.$ = $;

var React = require('react');
var HomeView = require('./HomeView');
var LoginView = require('./LoginForm');

window.activeSession = { id: null };

var HomeModel = Backbone.Model.extend({
  defaults: {
    name: 'Jason',
    loggedIn: false
  },
  onSubmit: function() {
  	this.loggedIn = true;
  	this.onUserChange();
  },
  onUserChange: function() {
  	if(this.loggedIn) {
		this.view = React.render(
			  <HomeView model={this} submissionHandler={this}/>,
			  document.getElementById('holder')
			);
	} else {
		this.view = React.render(
			  <LoginView submissionHandler={this}/>,
			  document.getElementById('holder')
			);
	    }
	}
});

testmod = new HomeModel();
testmod.onUserChange();

var testTimer = setInterval(function () 
{ 
	console.log("Timer ran");
	testmod.set("loggedIn", true);
	console.log(testmod);

	testmod.onUserChange();

	window.clearInterval(testTimer);
}, 3000);