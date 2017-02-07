<?php
    header("Content-type:text/html;charset=utf-8");
    function doGet(){
        $conn=new mysqli("localhost","root","","chats");
        mysqli_query($conn,"set character set 'utf8'");//读库
        mysqli_query($conn,'set names utf8');//写库
        $result=$conn->query("select * from messages2 where mobile='".$_POST["mobile"]."' and secret='".$_POST["password"]."'");
        $res="{";
        while($row = mysqli_fetch_assoc($result)){
            $res.="\"mobile\":\"".$row["mobile"]."\",";
            $res.="\"secret\":\"".$row["secret"]."\",";
        }
        $conn->close();
        $res=substr($res,0,strripos($res,","));
        $res.="}";
        echo $res;
    }
    doGet();
?>