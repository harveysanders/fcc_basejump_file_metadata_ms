'use strict';

function fileUploadHandler() {
	return {
		getFileSize: function(req, res) {
			res.send('request received.');
		}
	};
}

module.exports = fileUploadHandler;