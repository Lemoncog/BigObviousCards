load = function() {
  var HomeView = React.createClass({
    handleChange: function() {
    }
  },
    render: function() {
      return (
      	<div className="HomeView">
  	    	<h1>Welcome home</h1><h1>Going to have a cool panel pn teh right</h1>
      	</div>
      );
    }
  });

  React.render(
    <HomeView />,
    document.getElementById('home_holder')
  );

}