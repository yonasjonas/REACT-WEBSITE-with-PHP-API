
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if (empty($_POST['fname']) && empty($_POST['email'])) die();
//below is a way track response after file has run
$file = 'log.txt';
// Open the file to get existing content
$current = file_get_contents($file);
// Append a to the file
$current .= "line 1:" . $rest_json;
// Write the contents back to the file
file_put_contents($file, $current);

if ($_POST) {

	// set response code - 200 OK
	http_response_code(200);
	$subject = $_POST['fname'] . " with email: " . $_POST['email'];

	$to = "info@webface.ie";
	$from = $_POST['email'];

	// data

	$msg = "Name: " . $fname = $_POST['fname'] . "<br/>Last Name: " .  $lname = $_POST['lname'] .  "<br/>Email: " . $email = $_POST['email'] .  "<br/>Message: " . $message = $_POST['message'];

	// Headers

	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=UTF-8\r\n";
	$headers .= "From: <" . $from . ">";
	// send here	
	mail($to, $subject, $msg, $headers);

	// send response back to the React
	echo json_encode(array("sent" => true));
}
else {
	// tell the user about error
	echo json_encode(["sent" => false, "message" => "Something went wrong"]);
}

?>
