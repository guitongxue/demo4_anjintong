var React = require('react');

var Contents = require('./Contents');
var AddData = require('./AddData');
var Store = require('../Stores/Store');

var MyApp = React.createClass({
	getInitialState: function(){
		return {data: Store.getAllData()}
	},
	componentDidMount(){
		Store.addListener(this.change);
	},
	componentWillUnmount(){
		Store.removeListener(this.change);
	},
	render: function(){
		return <div>
					<Contents data = {this.state.data} />
					<AddData />
			</div>

	},
	change: function(){
		this.setState({data: Store.getAllData()});
	}

});

module.exports = MyApp;