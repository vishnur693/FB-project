$(document).ready(function(){
    $("#signupform").validate({
        rules:{
            fname:{
                required:true,
                minlength:4
            },
            sname:{
                required:true,
                maxlength:8,
                alphanumeric:true

            },
            emailAddress:{
                required:true,   
            },
            Password:{
                required:true,
                maxlength:8,

            },
        },
        messages:{
                sname:{
                    maxlength:"Enter max 8 characters"
                }
            }
        
    })
})