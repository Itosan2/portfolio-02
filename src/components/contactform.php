<?php

if (isset($_POST['submit'])){
    $firstname = $_POST['firstname'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['email'];
    $textarea = $_POST['textarea'];

    $mailTo = "e2choong@yahoo.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have an email from ".$name.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers);
    header("Location: contact.jsx?mailsend");
}

?>