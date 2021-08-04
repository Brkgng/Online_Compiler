let editor;
let editorDiv = document.getElementById("editor");
let output = document.getElementById("output");

function initEditor() {
	editor = ace.edit("editor");
	editor.setTheme("ace/theme/solarized_dark");
	editor.session.setMode("ace/mode/python");
	editor.setOptions({
		enableBasicAutocompletion: true,
		enableLiveAutocompletion: true,
		showPrintMargin: false,
		fontSize: "20",
	});
	changeOutputTheme();
	output.style.color = "white";

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

function changeTheme() {
	const theme = document.getElementById("theme").value;
	let dark_theme = 1;

	switch(theme) {
		case "clouds":
			editor.setTheme("ace/theme/clouds");
			dark_theme = 0;
			break; 
		case "dreamweaver":
			editor.setTheme("ace/theme/dreamweaver");
			dark_theme = 0;
			break; 
		case "eclipse":
			editor.setTheme("ace/theme/eclipse");
			dark_theme = 0;
			break; 
		case "github":
			editor.setTheme("ace/theme/github");
			dark_theme = 0;
			break; 
		case "solarized_light":
			editor.setTheme("ace/theme/solarized_light");
			dark_theme = 0;
			break; 
		case "tomorrow_night":
			editor.setTheme("ace/theme/tomorrow_night");
			break; 
		case "monokai":
			editor.setTheme("ace/theme/monokai");
			break; 
		case "twilight":
			editor.setTheme("ace/theme/twilight");
			break; 
		case "dracula":
			editor.setTheme("ace/theme/dracula");
			break; 
		case "nord_dark":
			editor.setTheme("ace/theme/nord_dark");
			break; 
		case "solarized_dark":
			editor.setTheme("ace/theme/solarized_dark");
			break; 
		case "ambiance":
			editor.setTheme("ace/theme/ambiance");
			break; 
		case "chaos":
			editor.setTheme("ace/theme/chaos");
			break; 
	}
	changeOutputTheme(dark_theme);
}

function changeOutputTheme(dark_theme) {
	output.style.backgroundColor = window.getComputedStyle(editorDiv).getPropertyValue("background-color");
	if (dark_theme) {
		output.style.color = "white";
	} else {
		output.style.color = "black";
	}
}

function showSettingsMenu() {
	editor.execCommand("showSettingsMenu");
}

initEditor();

// TODO add session
