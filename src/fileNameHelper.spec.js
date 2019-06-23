"use strict";

const FileNameHelper = require('./fileNameHelper');

const chai = require('chai');
const expect = chai.expect;

describe('FileNameHelper', () => {
	let helper = undefined;

	describe('Given a valid fileName', () => {
		beforeEach(() => {
			helper = new FileNameHelper('testName.exe')
		});

		it('WHEN fileName requested THEN correct name returned', () => {
			expect(helper.fileName).to.be.equal('testName');
		});

		it('WHEN fileExtention requested THEN correct extention returned', () => {
			expect(helper.fileExtention).to.be.equal('.exe');
		});

		it('WHEN asUpperCaseCamellCase called THEN correct value returned', () => {
			expect(helper.asUpperCaseCamellCase()).to.be.equal('TestName');
		});
	})
});
