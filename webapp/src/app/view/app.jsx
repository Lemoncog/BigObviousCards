var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('lodash');
Backbone.$ = $;

var React = require('react');
var HomeView = require('./HomeView');

window.activeSession = { id: null };

var HomeModel = Backbone.Model.extend({
  defaults: {
    name: 'Jason',
    loggedIn: false
  }
});

React.render(
	  <HomeView model={new HomeModel()}/>,
	  document.getElementById('holder')
	);