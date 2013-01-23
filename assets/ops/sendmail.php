<?php
$redirectTo = "../../thank_you.php";
<<<<<<< HEAD
$to = "robabby23@gmail.com";
$from = "Feedback Form";
$subject = "";
$headers = "From: $from\r\n";
$message = "";
$formFields = array_keys($_POST);

for ($i = 0; $i < sizeof($formFields); $i++) {
=======
$to = "rob@rawdesigns.net";
$from = "Feedback Form";
$subject = "Yo!";
$headers = "From: $from\r\n";
$message = "";
$formFields = array_keys($_POST);
for ($i = 0; $i < sizeof($formFields); $i++)
{
>>>>>>> 240ec12965ff2c9b70ea505199979c797633ce82
    $theField = strip_tags($formFields[$i]);
    $theValue = strip_tags($_POST[$theField]);
    $message .= $theField;
    $message .= " = ";
    $message .= $theValue;
    $message .= "\n";
}
<<<<<<< HEAD

$success = mail($to, $subject, $message, $headers);

if ($success) {
    header("Location: " . $redirectTo);
} else {
    echo "An error occurred when sending the email.";
}
=======
$success = mail($to, $subject, $message, $headers);
if ($success)
{
    header("Location: " . $redirectTo);
}
else
{
    echo "An error occurred when sending the email.";
}
?>
>>>>>>> 240ec12965ff2c9b70ea505199979c797633ce82
