'use strict';
const chalk = require('chalk');
const format = require('date-fns/format');

exports.log = (options, output) => {
	const logger = new console.Console(options.stream, options.stream);
	if (options.dateFormat === false) {
		logger.log(`${output}`);
		return;
	}

	const timestamp = format(new Date(), options.dateFormat);

	logger.log(chalk.dim(`[${timestamp}]`) + ` ${output}`);
};
