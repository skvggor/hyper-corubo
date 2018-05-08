'use strict';

const colors = {
	backgroundColor: '#231f20',
	black: '#000',
	blue: '#06f',
	cyan: '#0ff',
	foregroundColor: '#d9d8d8',
	gray: '#737171',
	green: '#3f0',
	magenta: '#f09',
	red: '#ff0',
	white: '#fff'
}

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor: colors.backgroundColor,
		foregroundColor: colors.foregroundColor,
		borderColor: colors.foregroundColor,
		cursorColor: colors.magenta,
		fontSize: 14,
		fontFamily: '"Hack", "Menlo", "Consolas", monospace',
		colors: [
			colors.black,
			colors.red,
			colors.green,
			colors.yellow,
			colors.blue,
			colors.magenta,
			colors.cyan,
			colors.gray,
		],
		css:
			`${config.css || ''}

			.hyper_main {
				border-color: ${colors.foregroundColor} !important;
			}`
	})
}
