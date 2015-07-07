var React = require('react');
var VisualInfo = require('./VisualInfoView');

module.exports = React.createClass({
  handleChange: function() {
  },
  render: function() {
    return (
    	<div className="HomeView col-centered" >
          <h1>Hello World</h1>
          <b>Welcomes {this.props.userModel.get('name')} </b><div></div>

          {this.props.infoListModel.get('infoList').map(function(info, i) {
            return ( <VisualInfo info={info}/> );
          })}          
      </div> 
    );
  }
});