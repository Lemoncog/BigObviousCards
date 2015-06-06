var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('lodash');
Backbone.$ = $;

var React = require('react');
var HomeView = require('./HomeView');
var LoginView = require('./LoginForm');

window.activeSession = { id: null };

var UserModel = Backbone.Model.extend({
	defaults : {
		loggedIn: false,
		name: 'Cactus'
	}
});

GLOBAL_USER = new UserModel();

var LoginController = Backbone.Model.extend({
  onSubmit: function() {
  	//Pretend it al went well.
  	GLOBAL_USER.set('loggedIn', true);
  	GLOBAL_ROUTER.navigate("home", {trigger: true});
  }
}) 



var AppRouter = Backbone.Router.extend({
	routes: {
		'' : 'home',
		'home' : 'home',
		'login' : 'login'	
	},
	loginCheck: function() {
		if(!GLOBAL_USER.get('loggedIn')) {
			this.navigate('login', {trigger: true, replace: true});
			return false;
		}
		return true;
	},
	home: function () {
		console.log("home called");

		//Always do a login check
		if(this.loginCheck()) {
			React.render(
				  <HomeView userModel={new UserModel()}/>,
				  document.getElementById('holder')
			);
		}
			
	},
	login: function() {
		console.log("login called");
		React.render(
			  <LoginView submissionHandler={new LoginController()}/>,
			  document.getElementById('holder')
		);
	}
});

GLOBAL_ROUTER = new AppRouter();
Backbone.history.start();

// var testTimer = setInterval(function () 
// { 
// 	console.log("Timer ran");
// 	testmod.set("loggedIn", true);
// 	console.log(testmod);

// 	testmod.onUserChange();

// 	window.clearInterval(testTimer);
// }, 3000);