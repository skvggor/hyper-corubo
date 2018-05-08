'use strict';

const colors = {
	backgroundColor: '#231f20',
	foregroundColor: '#d9d8d8',
	black: '#000',
	red: "#ff4136",
	green: '#3f0',
	yellow: '#ff0',
	blue: '#06f',
	magenta: '#f09',
	cyan: '#0ff',
	gray: '#737171'
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
