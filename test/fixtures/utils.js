'use strict';
const hookStd = require('hook-std');
const stripAnsi = require('strip-ansi');

exports.testOutput = (t, expected) => {
	t.plan(t._test.planCount || expected.length);
	let i = 0;

	const promise = hookStd.stdout(actual => {
		const stripped = stripAnsi(actual);
		if (stripped !== '') {
			t.is(stripped, `${expected[i++]}`);

			if (i === expected.length) {
				promise.unhook();
			}
		}
	});
};
