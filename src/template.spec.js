"use strict";

const chai = require('chai');
const expect = chai.expect;

const template = require('./template');

describe('Template', () => {
	describe('Given a valid options', () => {
		const options = {
			absolutePath: "/home/me/test.file",
			fileName: "test.file",
			template: "sh"
		};

		it('Correct class name generated', () => {
			const renderedTemplate = template.renderTemplate(options);

			expect(renderedTemplate).to.have.string('class Test {');
		});

		it('Correct export statement generated', () => {
			const renderedTemplate = template.renderTemplate(options);

			expect(renderedTemplate).to.have.string('module.exports = Test;');
		});
	});

});
