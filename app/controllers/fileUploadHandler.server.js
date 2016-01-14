'use strict';

function fileUploadHandler() {
	return {
		getFileSize: function(req, res) {
			
			console.log(req.file);
			res.json(req.file.size);
		}
	};
}

module.exports = fileUploadHandler;