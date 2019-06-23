"use strict";

const path = require('path');

class FileNameHelper {
	constructor(fileName) {
		this.rawFileName = fileName;
	}

	get fileExtention(){
		return path.extname(this.rawFileName);
	}

	get fileName(){
		return path.basename(this.rawFileName, this.fileExtention);
	}

	asUpperCaseCamellCase(){
		return this.fileName.charAt(0).toUpperCase() + this.fileName.slice(1);
	}
}

module.exports = FileNameHelper;
