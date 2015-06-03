var React = require('react');
var Dropdown = require('./Dropdown')

module.exports = React.createClass({
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