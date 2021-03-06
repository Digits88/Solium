/**
 * @fileoverview Ensure that all constants (and only constants) contain only upper case letters and underscore
 * @author Raghav Dua <duaraghav8@gmail.com>
 */

'use strict';

module.exports = {

	verify: function (context) {

		var upperCaseRegEx = /^[A-Z][A-Z_]*[A-Z]$/;

		function reportNode (node) {
			context.report ({
				node: node,
				message: 'Constant name \'' + node.name + '\' doesn\'t follow the UPPER_CASE notation'
			});
		}

		context.on ('DeclarativeExpression', function (emitted) {
			var node = emitted.node;

			if (emitted.exit) {
				return;
			}

			node.is_constant &&
			!upperCaseRegEx.test (node.name) &&
			reportNode (node);
		});

	}

};