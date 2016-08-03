var aaa = require('../Dispatcher/Dispatcher');
var actionsKey = require('../Constants/ActionKeys');
module.exports = {
	addItem: function(text){
		aaa.dispatch({
			type: actionsKey.ADD,
			text: text
		});

	},
	delete: function(id){
		aaa.dispatch({
			type: actionsKey.DELETE,
			id: id
		});
	}

}