var Franken = require('../index.js');
var os = require('os');

var franken = new Franken({
	applicationId: '',
	publish: {
		key: '',
		token: ''
	}
}, 'sample-app');
franken.start();

setTimeout(function() {
	franken.setData({ host: os.hostname() });
}, 10000);

setTimeout(function() {
	franken.clearData({ host: os.hostname() });
}, 20000);

setTimeout(function() {
	franken.stop();
}, 50000);