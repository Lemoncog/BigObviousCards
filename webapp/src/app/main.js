//var syncMessage = "24 1 1 0 1";

console.log("Main is loading...");

HelloWorldView = Backbone.View.extend({
	initialize: function() {
		this.render();
	},
	addLog: function(log) {
		this.render();
	},
	render: function() { 
		this.$el.html("<b> Hello World </b>");
	}
});


main = function() {
	console.log("MAIN START");

	var helloWorldView = new HelloWorldView({ el: $("#hello_holder")});
}

console.log("Main has loaded");
