var React = require('react');
var Action = require('../Actions/Actions');
var Item = React.createClass({
	render: function(){
		return <li ><span>{this.props.item.text}</span> <input type="button" value="remove" onClick ={this.remove}/></li>
	},
	remove: function(){
		Action.delete(this.props.item.id);
	}

});
module.exports = Item;