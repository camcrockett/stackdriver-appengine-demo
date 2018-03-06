var Status = React.createClass({
  render: function() {
    return (<tr>
    <td>{this.props.status.name}</td>
    <td>{this.props.status.enabled}</td>
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
		                <th>Name</th><th>Enabled</th>
		              </tr>
		            </thead>
		            <tbody>{rows}</tbody>
		          </table>
		          </div>);
		  }
		});
		    
var STATUSES = [
	  {name: 'HealthCheck', enabled: 'true'},
	  {name: 'Cloud SQL Link Error', enabled: 'false'},
	  {name: 'Unavailable', enabled: 'false'},
	  {name: 'DataStore Link Error', enabled: 'false'}
	];
 
ReactDOM.render(
  <StatusTable statuses={STATUSES} />, document.getElementById('content')
);