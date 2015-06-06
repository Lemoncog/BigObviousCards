var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('lodash');
Backbone.$ = $;

var React = require('react');
var HomeView = require('./HomeView');
var LoginView = require('./LoginForm');

window.activeSession = { id: null };

var AppRouter = Backbone.Router.extend({
	routes: {
		'' : 'home',
		'home' : 'home',
		'login' : 'login'	
	},
	home: function () {
		console.log("home called");
		React.render(
			  <HomeView model={this} submissionHandler={this}/>,
			  document.getElementById('holder')
		);
	},
	login: function() {
		console.log("login called");
		React.render(
			  <LoginView submissionHandler={this}/>,
			  document.getElementById('holder')
		);
	}
});

var HomeModel = Backbone.Model.extend({
  defaults: {
  	router: new AppRouter(),
    name: 'Jason',
    loggedIn: false
  },
  onSubmit: function() {
  	this.loggedIn = true;
  	this.onUserChange();
  },
  onUserChange: function() {
  	if(this.loggedIn) {
  		this.router.navigate("home", {trigger: true});
	} else {
  		this.router.navigate("login", {trigger: true, replace:  true});
	}
  }
});

testmod = new HomeModel();

Backbone.history.start();
testmod.onUserChange();

var testTimer = setInterval(function () 
{ 
	console.log("Timer ran");
	testmod.set("loggedIn", true);
	console.log(testmod);

	testmod.onUserChange();

	window.clearInterval(testTimer);
}, 3000);