const moment = require('moment-timezone');

module.exports = function( currentZone ) {
	return new Date(moment(new Date()).tz( currentZone ).format());
}