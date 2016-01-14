(function() {
	var form = document.querySelector('#file-upload-form');
	var apiUrl = appUrl + '/api/fileanalyze';
	var output = document.querySelector('.output');
	var fileToUpload = document.querySelector('#file-to-upload');

	//jQuery version
	$(form).on('submit', function(event) {
		event.stopPropagation();
		event.preventDefault();

		var data = new FormData;
		data.append('userFile', fileToUpload.files[0], fileToUpload.files[0].name);

		$.ajax({
			url: apiUrl,
			type: 'POST',
			data: data,
			cache: false,
			dataType: 'json',
			processData: false,
			contentType: false,
			success: function(response, textStatus, jqXHR) {
				output.innerHTML = 'Uploaded file size: ' + response + ' bytes.';
			}
		});
	});

	//Vanilla JS version
	// form.addEventListener('submit', function(event) {
	// 	event.preventDefault();

	// 	var formData = new FormData();
	// 	formData.append('userFile', fileToUpload.files[0], fileToUpload.files[0].name);
	// 	console.log(formData);
	// 	var request = new XMLHttpRequest();
	// 	request.open("POST", apiUrl, true);
	// 	request.onload = function(oEvent) {
	// 		if (request.status === 200) {
	// 			console.log("File Uploaded!");
	// 		} else {
	// 			console.log("Error " + request.status + " occurred when trying to upload your file.<br \/>");
	// 		}
	// 	};
	// 	request.send(formData);
	// }, false); //useCapture?




})();