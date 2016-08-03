var Dispatcher = require('../Dispatcher/Dispatcher');
var actionsKey = require('../Constants/ActionKeys');
var EventEmitter = require('events').EventEmitter;

var assign  =require('object-assign');

const CHANGE = 'CHANGE';
var datas=[];
var __itemId = 0;
var dataStroe = assign({}, EventEmitter.prototype,{
	addListener: function(callback){
		this.on(CHANGE, callback);
	},
	removeListener: function(callback){
		this.removeListener(CHANGE, callback)
	},
	getAllData: function(){
		return datas;
	},
	setData : function(text){
		datas.push({id: __itemId++, text: text});
		this.emitChange();
	},
	emitChange: function(){
		this.emit(CHANGE);
	},
	removeItem: function(id){
		var _index =-1;
		for(var i =0;i<datas.length; i++){
			var item = datas[i];
			if(item.id == id){
				_index = i;
				break;
			}
		}

		if(_index > -1){
			datas.splice(_index, 1);
		}

	},
	initData: function(arr){
		datas = arr.map(function(text){
			return {id: __itemId++, text: text}
		});
	}

});

Dispatcher.register(function(action){
	switch(action.type){
			case actionsKey.ADD:
			dataStroe.setData(action.text);
			dataStroe.emitChange();
			break;
			case  actionsKey.DELETE:
			dataStroe.removeItem(action.id);
			dataStroe.emitChange();
			break;

	}

});

module.exports = dataStroe;