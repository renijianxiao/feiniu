<?php
    header("Content-type:text/html;charset=utf-8");
    function doGet(){
        $success=0;
        $conn=new mysqli("localhost","root","","chats");
        mysqli_query($conn,"set character set 'utf8'");//读库
        mysqli_query($conn,'set names utf8');//写库
        $value="'".$_POST["mobile"]."','".$_POST["secret"]."'";
      
        if($conn->query("insert into messages2 (mobile,secret) values (".$value.")")==true){
            $success=1;
        }
        $conn->close();
        echo $success;
      
    }
    doGet();
?>