var React = require('react');
var Items = require('./ContentItems');

var Contents = React.createClass({
	render: function(){
		var data = this.props.data;
		var	_data = data.map(function(items){
			return <Items key={items.id} item = {items}/>
		});
		return <ul>{_data}</ul>

	}

});
module.exports = Contents;