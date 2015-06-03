var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('lodash');
Backbone.$ = $;

var React = require('react');
var HomeView = require('./HomeView');
var LoginView = require('./LoginForm');

window.activeSession = { id: null };

var AppRouter = Backbone.Router.extend({

});

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
  		//this.router.navigate("login", {trigger: true});
		this.view = React.render(
			  <HomeView model={this} submissionHandler={this}/>,
			  document.getElementById('holder')
			);
	} else {
  		//this.router.navigate("home", {trigger: true});
		this.view = React.render(
			  <LoginView submissionHandler={this}/>,
			  document.getElementById('holder')
			);
	    }
	}
});

Backbone.history.start();
var appRouter = new AppRouter();
testmod = new HomeModel();
testmod.set("router", appRouter);
testmod.onUserChange();

var testTimer = setInterval(function () 
{ 
	console.log("Timer ran");
	testmod.set("loggedIn", true);
	console.log(testmod);

	testmod.onUserChange();

	window.clearInterval(testTimer);
}, 3000);