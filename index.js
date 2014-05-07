var hatchet = require('hatchet.io');

function Franken(auth, service) {
	var self = this;
	var timer = undefined;
	var data = undefined;
	var created = new Date();

	auth = auth || {};

	// You can enable/disable franken transmission from auth config
	var enabled = typeof auth.enabled != 'undefined' ? auth.enabled : true;

	var config = {
		hatchet: {
			host: 'socket.franken.inlight.com.au',
			channel: 'franken-api',
			pub: '3lkS1CrspfUvvK7iVoffKdMb8jHw04BsA48Mrx818ByXBr'
		}
	}

	var heartbeatInterval = 5000;

	var publisher = hatchet.publisher(config.hatchet.channel, config.hatchet.pub, { host: config.hatchet.host });

	function start() {
		if (timer || !enabled) return;
		timer = setInterval(function() {
			publisher.broadcast('heartbeat', { auth: auth, service: service, data: data, meta: { created: created, now: new Date() } });
		}, heartbeatInterval);
	}

	function stop() {
		if (!timer) return;
		clearInterval(timer);
		timer = undefined;
	}

	function setData(extraData) {
		data = extraData;
	}

	function clearData() {
		data = undefined;
	}

	this.start = start;
	this.stop = stop;
	this.setData = setData;
	this.clearData = clearData;
}

module.exports = Franken;