var bunyan = require('bunyan');
var path = require('path');

var logger = bunyan.createLogger({
	name: 'Evolve',
	streams : [
		{
			stream: process.stdout, 
			level: 'debug'
			//output everything above debug to standard out also for general debug. 
		},
		{
			path: path.join('.','logs','info.log'),
			level: 'info'		
			//for tracking errors and general debug info
		},
		{
			path: path.join('.','logs','error.log'),
			level: 'error'
			//for tracking app errors & emergencies.
		},
		{
			path: path.join('.','logs','emergency.log'),
			level: 'fatal'
			//for tracking major emergency. will also exist in error 
		}
	],
	serializers: bunyan.stdSerializers
});

module.exports = logger;
