var React = require('react');
var Dom = require('react-dom');
var MyApp = require('./Views/MyApp');
var ServerData = require('./ServerData');
var Store = require('./Stores/Store');
Store.initData(ServerData.init());
Dom.render(<MyApp />, document.getElementById('app'));