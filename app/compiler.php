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
		$path = realpath("../language/php/php.exe");
		echo shell_exec("$path $filePath 2>&1");
		break;
	case 'py':
		echo shell_exec("C:\Users\PC\AppData\Local\Programs\Python\Python39\python.exe $filePath 2>&1");
		break;
	case 'node':
		echo shell_exec("node $filePath 2>&1");
		break;
	case 'cpp':
		shell_exec("gcc $filePath -o $random.exe");
		echo shell_exec(__DIR__ . "//$random.exe");
		break;
}
