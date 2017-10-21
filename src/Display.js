import React, { Component } from 'react';
const moment = require('moment');

// Write a component that renders the stopwatch time!
class Display extends Component {
	
render() {
	const dur = moment.duration(this.props.count);
	return(
		
		<div>
			 <h1>{`${dur.minutes()}:${dur.seconds()}:${dur.milliseconds()}`}</h1>
		</div>

		)
}
}

export default Display;
