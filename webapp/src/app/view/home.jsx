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
    var tmpThis = this;
    var options = this.props.list.map(function (item) {
      
      var noMatch = (item != tmpThis.props.selected);
      var itemView;
      if(noMatch) {
        itemView = <div onClick={tmpThis.select.bind(null, item)} className="dropdown-item">{item.name}</div>
      }
      return (
        itemView
      );
    });

    return (
      <div className="Dropdown">

        <div className={"dropdown-container" + (this.state.listVisible ? " show" : " hide")}  onClick={this.show}>
          <div className="dropdown-selected">
            {this.props.selected.name}
            <i className="fa fa-caret-down"></i> 
          </div>
          <div className="dropdown-display">{options}</div>
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