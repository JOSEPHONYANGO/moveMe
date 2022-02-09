<?php
$firstName= $_POST['firstname'];
$lastName= $_POST['lastname'];
$email= $_POST['email'];
$password= $_POST['password'];
$number= $_POST['number'];
$location= $_POST['location'];

// Database Connection

$conn =new mysqli('localhost','root','','test');
if($conn->connect_error){
    die('Connection Failed:' .$conn->connect_error);
}
else{
    $stmt=$conn->prepare("insert into registration(firstName,lastName,email,password,number,
    location)values(?,?,?,?,?,?)");
    $stmt->bind_param("ssssis",$firstName, $lastName,$email,$password,$number,$location );
    $stmt->execute();
    echo"registration successful";
    $stmt->close();
    $conn->close();
}
?>