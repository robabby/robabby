<?php
$redirectTo = "../../thank_you.php";
$to = "rob@rawdesigns.net";
$from = "Feedback Form";
$subject = "Yo!";
$headers = "From: $from\r\n";
$message = "";
$formFields = array_keys($_POST);
for ($i = 0; $i < sizeof($formFields); $i++)
{
    $theField = strip_tags($formFields[$i]);
    $theValue = strip_tags($_POST[$theField]);
    $message .= $theField;
    $message .= " = ";
    $message .= $theValue;
    $message .= "\n";
}
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