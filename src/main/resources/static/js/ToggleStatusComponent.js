import React from 'react';
import Toggle from 'material-ui/Toggle';

const ToggleStatusComponent = () => (
		<tr>
		<td>{this.props.status.name}</td>
		<td>
				<Toggle label="Simple" style={styles.toggle} defaultToggled={this.props.status.enabled} />
		</td>
		</tr>
);

export default ToggleStatus;