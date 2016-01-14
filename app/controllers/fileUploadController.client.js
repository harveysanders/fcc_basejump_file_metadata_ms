(function() {
	var form = document.querySelector('#file-upload-form');
	var apiUrl = appUrl + '/api/fileanalyze';
	var output = document.querySelector('.output');
	var fileToUpload = document.querySelector('#file-to-upload');

	form.addEventListener('submit', function(event) {
		event.preventDefault();

		var formData = new FormData();
		formData.append('userFile', fileToUpload.files[0], fileToUpload.files[0].name);
		console.log(formData);
		var request = new XMLHttpRequest();
		request.open("POST", apiUrl, true);
		request.onload = function(oEvent) {
			if (request.status === 200) {
				output.innerHTML = "Uploaded!";
			} else {
				output.innerHTML = "Error " + request.status + " occurred when trying to upload your file.<br \/>";
			}
		};
		request.send(formData);
	}, false); //useCapture?

})();