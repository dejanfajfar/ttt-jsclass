"use strict";

const fs = require('fs');
const handlebars = require('handlebars');
const FileNameHelper = require('./fileNameHelper');

const templateFileLocation = './src/template.handlebars';

module.exports.renderTemplate = (options) => {
	const fileNameHelper = new FileNameHelper(options.fileName);

	options.className = fileNameHelper.asUpperCaseCamellCase();

	const rawTemplate = fs.readFileSync(templateFileLocation, {
		encoding: 'utf8',
		flag: 'r'
	});

	const compiledTemplate = handlebars.compile(rawTemplate);

	return compiledTemplate(options);
};
