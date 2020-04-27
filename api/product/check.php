
<?php
$to = "jonassamaitis@gmail.com, info@webface.ie";
$subject = "HTML email";

$message = "
<html>
<head>
<title>HTML email</title>
</head>
<body>
<p>This email contains HTML Tags!</p>
<table>
<tr>
<th>Firstname</th>
<th>Lastname</th>
</tr>
<tr>
<td>John</td>
<td>Doe</td>
</tr>
</table>
</body>
</html>
";

// Always set content-type when sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers
$headers .= 'From: <jonassamaitis@gmail.com>' . "\r\n";
$headers .= 'Cc: info@webface.ie' . "\r\n";
if(mail($to,$subject,$message,$headers))
      {
      echo "<script>console.log('Mail was sent !');</script>";
      /* echo "<script>document.location.href='contact.php'</script>"; */
      }
      else
      {
      echo "<script>console.log('Mail was not sent. Please try again later');</script>";
      }

mail($to,$subject,$message,$headers);
?>