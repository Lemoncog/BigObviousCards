load = function() {

  var DetailView = React.createClass({
    render: function() {
      return (
        <div className="DetailView">
          <b>is Jason</b>
        </div>
      );
    }
  })
      
var Dropdown = React.createClass({
  getInitialState: function() {
    return {
      listVisible: false
    };
  },
  
  select: function(item) {
    this.props.selected = item;
  },
        
  show: function() {
    this.setState({ listVisible: true });
    document.addEventListener("click", this.hide);
  },
        
  hide: function() {
    this.setState({ listVisible: false });
    document.removeEventListener("click", this.hide);
    console.log("You clicked hide");
  },
      
  render: function() {
    var options = this.props.list.map(function (item) {
      return (
        <div className="dropdown-item">{item.name}</div>
      );
    });

    return (
      <div className="Dropdown">
        <div className={"dropdown-container" + (this.state.listVisible ? " show" : " hide")}  onClick={this.show}>
          <div className="dropdown-selected">{this.props.selected.name}</div>
          <div className="dropdown-display">{options}</div>
          <i className="fa fa-angle down"></i>
        </div>
      </div>
      );
  }
});

  var ClientSelectView = React.createClass({
    render: function() {
      
      var carers = [
        { name: "Benjamin" },
        { name : "Ellie Gibson"},
        { name : "Molly Churchwoodward"}
      ]

      return (
        <div className="ClientSelectView">
          <Dropdown list={carers} selected={carers[0]}/>
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