<?php

    //สร้างการเชื่อมต่อฐานข้อมูล
    $conn = mysqli_connect('localhost', 'root', '', 'app_practice');

    //ตรวจสอบว่าเชื่อมต่อสำเร็จหรือไม่
    if(!$conn){
        die("Failed to connect to database " . mysqli_error($conn));
    }




?>