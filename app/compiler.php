<?php
$language = $_POST['language'];
$code = $_POST['code'];

$random = substr(md5(mt_rand()), 0, 10);
$filePath = "temp/" . $random . "." . $language;
$writeFile = fopen($filePath, "w");
fwrite($writeFile, $code);
fclose($writeFile);

switch ($language) {
	case 'php':
		// php added in languages folder
		// More languages can be added by giving path
		$path = realpath("../language/php/php.exe");
		echo shell_exec("$path $filePath 2>&1");
		break;
	case 'cpp':
		shell_exec("g++ $filePath -o temp/$random.exe");
		echo shell_exec(__DIR__ . "/temp/$random.exe");
		break;

	case 'py':	// Modify path when using your local
		echo shell_exec("C:\Users\PC\AppData\Local\Programs\Python\Python39\python.exe $filePath 2>&1");
		break;
}
