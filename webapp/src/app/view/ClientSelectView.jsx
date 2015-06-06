var React = require('react');
var Dropdown = require('./Dropdown')

module.exports = React.createClass({
  onDropdownChange: function(from, to) {
    this.props.changeListener.clientSelected(to);
  },
  render: function() {
    
    var clients = ["Sam Wise", "Frodo", "Gandalf"];

    return (
      <div className="ClientSelectView">
        <Dropdown changeListener={this} list={clients} selected={this.props.clientModel.get('clientName')}/>
      </div>
    );
  }
}); 