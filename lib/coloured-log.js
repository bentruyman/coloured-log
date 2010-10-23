var Colour = require('coloured')
  , Log = require('log');

var colours = {};

colours[Log.EMERGENCY]	= { background: 'red',		foreground: 'yellow',	extra: 'bold' };
colours[Log.ALERT]		= { background: 'yellow',	foreground: 'red',		extra: 'bold' };
colours[Log.CRITICAL]	= { background: 'yellow',	foreground: 'black' };
colours[Log.ERROR]		= { foreground: 'red' };
colours[Log.WARNING]	= { foreground: 'yellow' };
colours[Log.NOTICE]		= { foreground: 'cyan' };
colours[Log.INFO]		= {};
colours[Log.DEBUG]		= {};

var ColouredLog = exports = module.exports = function () {};

ColouredLog.prototype = new Log;

ColouredLog.prototype.colours = colours;

ColouredLog.prototype.log = function (levelStr, msg) {
	if (Log[levelStr] <= this.level) {
		this.stream.write(Colour.colourise(
			'[' + new Date().toUTCString() + ']'
			+ ' ' + levelStr
			+ ' ' + msg
			+ '\n'
		, colours[Log[levelStr]]));
	}
};
