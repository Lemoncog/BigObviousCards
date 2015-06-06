var React = require('react');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      listVisible: false
    };
  },
  select: function(item) {
    this.props.changeListener.onDropdownChange(this.props.selected, item);
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
        itemView = <div onClick={tmpThis.select.bind(null, item)} className="dropdown-item">{item}</div>
      }
      return (
        itemView
      );
    });

    return (
      <div className="Dropdown">

        <div className={"dropdown-container" + (this.state.listVisible ? " show" : " hide")}  onClick={this.show}>
          <div className="dropdown-selected">
            {this.props.selected}
            <i className="fa fa-caret-down"></i> 
          </div>
          <div className="dropdown-display">{options}</div>
        </div>
      </div>
      );
  }
});