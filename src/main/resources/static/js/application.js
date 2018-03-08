import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var Status = React.createClass({
  render: function() {
    return (<tr>
    <td>{this.props.status.name}</td>
    <td>{this.props.status.enabled}</td>
  </tr>);
  }
});
var Status = React.createClass({
  render: function() {
    return (<tr>
    <td>{this.props.status.name}</td>
    <td>
    		<Toggle label="Simple" style={styles.toggle} defaultToggled={this.props.status.enabled} />
    </td>
  </tr>);
  }
});
var StatusTable = React.createClass({
  render: function() {
    var rows = [];
    this.props.statuses.forEach(function(status, i) {
    	console.log(status);
    	rows.push(<Status key={i} status={status} />);	
    });
    	console.log(rows);
    return (
    		<div className="status-container">
    		<table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th><th></th>
              </tr>
            </thead>
            <tbody>
            <ToggleStatusComponent status={{name: 'HealthCheck Running', enabled: true}} />
            </tbody>
          </table>
          </div>);
  }
});
		    
var STATUSES = [
  {name: 'HealthCheck Running', enabled: 'true'},
  {name: 'Long Running Cloud SQL Query', enabled: 'false'},
  {name: 'Website Unavailable', enabled: 'false'},
  {name: '500 Error', enabled: 'false'},
  {name: '404 Error', enabled: 'false'},
  {name: '401 Error', enabled: 'false'}
];
 
ReactDOM.render(
  <StatusTable statuses={STATUSES} />, document.getElementById('content')
);