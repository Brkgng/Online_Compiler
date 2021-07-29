let editor;

function initEditor() {
	editor = ace.edit("editor");
	editor.setTheme("ace/theme/monokai");
	editor.session.setMode("ace/mode/c_cpp");
}

function run() {
	$.ajax({
		url: "/app/compiler.php",
		method: "POST",
		data: {
			language: document.getElementById("language").value,
			code: editor.getSession().getValue()
		},

		success: function(response) {
			document.getElementById("output").innerText = response;
		}
	})
}

function changeLanguage() {
	const language = document.getElementById("language").value;

	switch (language) {
		case "cpp":
			editor.session.setMode("ace/mode/c_cpp");
			break;
		case "py":
			editor.session.setMode("ace/mode/python");
			break;
		case "js":
			editor.session.setMode("ace/mode/javascript");
			break;
		case "php":
			editor.session.setMode("ace/mode/php");
			break;
	}
}

initEditor();