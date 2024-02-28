<?php 

    $name=filter_input(INPUT_POST,"name",FILTER_SANITIZE_SPECIAL_CHARS);
    $useremail=$_POST["email"];
    $number=$_POST["number"];
    $message=$_POST["message"];
    
    
    if(!empty($name) && !empty($message) && !empty($useremail)){
        echo"you message is send";
        if(filter_var($useremail,FILTER_VALIDATE_EMAIL)){
            $to="safaesmaili.s@gmail.com";
            $subject="contact form";
            $txt=$message;
            $headers="From:{$name} {$useremail} \n to {$to};\n ";
            mail($to,$subject,$txt,$headers);
            echo"you message is send";
            $useremail="";
        }

    }


?>

