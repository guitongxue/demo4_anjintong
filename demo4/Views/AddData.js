var React = require('react');
var Action = require('../Actions/Actions');

var Bottom = React.createClass({
	getInitialState: function(){
		return {text:''}
	},
	render: function(){
		return <div><input type="text" value={this.state.text} onChange={this.change} ref="aaa"/>
		<input type="button" value="add" onClick={this.add}/></div>

	},
	change: function(){
		var text = this.refs.aaa.value;
		this.setState({text: text});
	},
	add: function(){
		var text = this.refs.aaa.value;
		if(text){
			Action.addItem(text);
		}
		this.setState({text: ''});
	}


});
module.exports = Bottom;