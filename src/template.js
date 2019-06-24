"use strict";

const handlebars = require('handlebars');
const FileNameHelper = require('./fileNameHelper');

//const templateFileLocation = require('./src/template.handlebars');

module.exports.renderTemplate = (options) => {
	const fileNameHelper = new FileNameHelper(options.fileName);

	options.className = fileNameHelper.asUpperCaseCamellCase();

	const compiledTemplate = handlebars.compile(templateText);

	return compiledTemplate(options);
};


const templateText =
`"use strict";

class {{className}} {
	constructor() {}
}

module.exports = {{className}};`;
