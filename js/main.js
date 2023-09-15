$(document).ready(function () {


    //when click reg-submit button
    $('#reg-submit').click(function () {
        
            var full_name = $('[name=full_name]').val();
            var email = $('[name=email]').val();
            var password = $('[name=password]').val();
            var password_confirmation = $('[name=password_confirmation]').val();
            var tel = $('[name=tel]').val();
            var id_student = $('[name=id_student]').val();

            if(full_name == '' || email == '' || password == '' || password_confirmation == ''){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Please fill all fields!',
                });
                return false;
            }

            if(password != password_confirmation){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Password and Confirm Password does not match!',
                });
                return false;
            }


            $.ajax({
                
                url: '../inc/reg_inc.php',
                method: 'POST',
                data: {
                    full_name: full_name,
                    email: email,
                    password: password,
                    password_confirmation: password_confirmation,
                    tel: tel,
                    id_student: id_student
                },
                success: function (data) {
                    if(data == true){
                        Swal.fire({
                            icon: 'success',
                            title: 'Success',
                            text: 'Registration Successful!',
                            comfirmButtonText: 'Ok'
                        }).then(function () {
                            window.location = 'login.php';
                        });
                        
                    }else{
                        console.log(data);
                    }
                }


            })
        
    });


});