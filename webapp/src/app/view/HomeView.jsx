var React = require('react');
var ClientSelectView = require('./ClientSelectView');
var DetailView = require('./DetailView');
var LoginForm = require('./LoginForm');

module.exports = React.createClass({
  handleChange: function() {
  },
  render: function() {

    loggedIn = this.props.model.get('loggedIn');
    var rootView;

    if(loggedIn) {
      rootView = <div className="HomeView">
                    <h1>TrackCare</h1>
                    <b>Welcomes {this.props.model.get('name')}</b>
                    <ClientSelectView />
                    <DetailView />
                   </div> 
    } else {
      rootView = <div className="HomeView">
                  <LoginForm/>
                 </div>
    }

    return (
    	rootView
    );
  }
});