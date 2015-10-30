'use strict';

var raf = require('raf');
var React = require('react');
var randomString = require('random-string');
var TVML = require('react-tvml');

var App = React.createClass({
	getInitialState: function() {
		return {
			title: randomString()
		};
	},
	componentDidMount: function() {
		raf(this.tick);
	},
	tick: function() {
		this.setState(this.getInitialState());
		raf(this.tick);
	},
	render: function() {
		return (<loadingTemplate>
			<activityIndicator>
				<text>{this.state.title}...</text>
			</activityIndicator>
		</loadingTemplate>);
	}
});
TVML.render(<App />);