load = function() {

  var DetailView = React.createClass({
    render: function() {
      return (
        <b>Ellie Gibson</b>
      );
    }
  })


  var ClientSelectView = React.createClass({
    render: function() {
      return (
        <div className="ClientSelectView">
          <b>Select Client</b>
        </div>
      );
    }
  }); 


  var HomeView = React.createClass({
    handleChange: function() {
    },
    render: function() {
      return (
      	<div className="HomeView">
          <ClientSelectView />
          <DetailView />
  	    </div>
      );
    }
  });

  React.render(
    <HomeView />,
    document.getElementById('home_holder')
  );

}