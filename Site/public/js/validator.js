
window.addEventListener("load",function(e){
    

    let mailformat = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;//expresion para validar mail
    let numberformat = /^[0-9]+$/; //expresion para validar numeros
    let extensionformat = (/\.(jpeg|jpg|png|gif)$/i) //expresion para validar extensión de fotos
    let decimalformat= /^[-+]?[0-9]+\.[0-9]+$/

    let form = selectForm();
    console.log("entrè")
    console.log(form)
    console.log(document.getElementById("formLogin"))
    let error= []
    
       // #############Validamos Login###############
    if(form != null && form !="" && document.getElementById("formLogin") != null){
        console.log("entre 2")
        let email= document.querySelector("#email"); 
        let password= document.querySelector("#password");
        let validationEmail= false;
        let validationPassword= false;
        
        form.addEventListener('submit', function(e){                       
            if(validationPassword && validationEmail){
                console.log('las validaciones fueron correctas');
            }else{
                e.preventDefault();
            }
        });

        email.addEventListener('focus', function(){
            if(email.value.match(mailformat)){
                email.classList.add("ok")
                email.classList.remove("bad")
                validationEmail= true
                console.log("prueba")
            }else{
                email.classList.add("bad")
                email.classList.remove("ok")
                console.log("prueba1")
                validationEmail= false
            }

        }),

        email.addEventListener('input', function(){
            if(email.value.match(mailformat)){
                email.classList.add("ok")
                email.classList.remove("bad")
                validationEmail= true
                console.log("prueba")
            }else{
                email.classList.add("bad")
                email.classList.remove("ok")
                console.log("prueba1")
                validationEmail= false
            }

        }),

        email.addEventListener('blur', function(){
            console.log(email)
            if(email.value.match(mailformat)){
                email.classList.add("ok")
                email.classList.remove("bad")
                validationEmail= true
                console.log("prueba")
            }else{
                email.classList.add("bad")
                email.classList.remove("ok")
                console.log("prueba1")
                validationEmail= false
            }

        })


        password.addEventListener('focus', function(){
            if(password.value.length > 7){
                password.classList.add("ok")
                password.classList.remove("bad")
                validationPassword= true
                console.log("prueba")
            }else{
                password.classList.add("bad")
                password.classList.remove("ok")
                console.log("prueba1")
                validationPassword= false
            }

        }),

        password.addEventListener('input', function(){
            if(password.value.length > 7){
                password.classList.add("ok")
                password.classList.remove("bad")
                validationPassword= true
                console.log("prueba")
            }else{
                password.classList.add("bad")
                password.classList.remove("ok")
                console.log("prueba1")
                validationPassword= false
            }

        }),

        password.addEventListener('blur', function(){
            if(password.value.length > 7){
                password.classList.add("ok")
                password.classList.remove("bad")
                validationPassword= true
                console.log("prueba")
            }else{
                password.classList.add("bad")
                password.classList.remove("ok")
                console.log("prueba1")
                validationPassword= false
            }

        })
               
        
    


    }

    // #############Validamos Register###############

    if(form != null && form !="" && document.getElementById("formRegister") != null){
        console.log("entre register")
        let name= document.querySelector("#name"); 
        let lastName= document.querySelector("#lastName"); 
        let email= document.querySelector("#email"); 
        let password= document.querySelector("#password");
        let repeatPassword= document.querySelector("#repeatpassword");
        let address=document.querySelector("#address"); 
        let tel=document.querySelector("#tel");
        let image= document.querySelector("#image");  
        let validationName= false;
        let validationLastName= false;
        let validationEmail= false;
        let validationPassword= false;
        let validationRepeatPassword= false;
        let validationAddress= false;
        let validationTel= false;
        let validationImage= true;
        
        form.addEventListener('submit', function(e){                       
            if(validationName && validationLastName && validationPassword && validationEmail 
                && validationAddress && validationTel && validationImage && validationRepeatPassword){
                console.log('las validaciones fueron correctas');
            }else{
                e.preventDefault();
                window.alert("Los datos no están completos")
            }
        });

        name.addEventListener('focus', function(){
            if(name.value.length>2){
                name.classList.add("ok")
                name.classList.remove("bad")
                validationName= true
                console.log("prueba")
            }else{
                name.classList.add("bad")
                name.classList.remove("ok")
                console.log("prueba1")
                validationName= false
            }

        }),

        name.addEventListener('input', function(){
            if(name.value.length>2){
                name.classList.add("ok")
                name.classList.remove("bad")
                validationName= true
                console.log("prueba")
            }else{
                name.classList.add("bad")
                name.classList.remove("ok")
                console.log("prueba1")
                validationName= false
            }

        }),

        name.addEventListener('blur', function(){
            if(name.value.length>2){
                name.classList.add("ok")
                name.classList.remove("bad")
                validationName= true
                console.log("prueba")
            }else{
                name.classList.add("bad")
                name.classList.remove("ok")
                console.log("prueba1")
                validationName= false
            }

        })

        lastName.addEventListener('focus', function(){
            if(lastName.value.length>2){
                lastName.classList.add("ok")
                lastName.classList.remove("bad")
                validationLastName= true
                console.log("prueba")
            }else{
                lastName.classList.add("bad")
                lastName.classList.remove("ok")
                console.log("prueba1")
                validationLastName= false
            }

        }),

        lastName.addEventListener('input', function(){
            if(lastName.value.length>2){
                lastName.classList.add("ok")
                lastName.classList.remove("bad")
                validationLastName= true
                console.log("prueba")
            }else{
                lastName.classList.add("bad")
                lastName.classList.remove("ok")
                console.log("prueba1")
                validationLastName= false
            }

        }),

        lastName.addEventListener('blur', function(){
            if(lastName.value.length>2){
                lastName.classList.add("ok")
                lastName.classList.remove("bad")
                validationLastName= true
                console.log("prueba")
            }else{
                lastName.classList.add("bad")
                lastName.classList.remove("ok")
                console.log("prueba1")
                validationLastName= false
            }

        })

        email.addEventListener('focus', function(){
            if(email.value.match(mailformat)){
                email.classList.add("ok")
                email.classList.remove("bad")
                validationEmail= true
                console.log("prueba")
            }else{
                email.classList.add("bad")
                email.classList.remove("ok")
                console.log("prueba1")
                validationEmail= false
            }

        }),

        email.addEventListener('input', function(){
            if(email.value.match(mailformat)){
                email.classList.add("ok")
                email.classList.remove("bad")
                validationEmail= true
                console.log("prueba")
            }else{
                email.classList.add("bad")
                email.classList.remove("ok")
                console.log("prueba1")
                validationEmail= false
            }

        }),

        email.addEventListener('blur', function(){
            console.log(email)
            if(email.value.match(mailformat)){
                email.classList.add("ok")
                email.classList.remove("bad")
                validationEmail= true
                console.log("prueba")
            }else{
                email.classList.add("bad")
                email.classList.remove("ok")
                console.log("prueba1")
                validationEmail= false
            }

        })


        password.addEventListener('focus', function(){
            if(password.value.length > 7){
                password.classList.add("ok")
                password.classList.remove("bad")
                validationPassword= true
                console.log("prueba")
            }else{
                password.classList.add("bad")
                password.classList.remove("ok")
                console.log("prueba1")
                validationPassword= false
            }

        }),

        password.addEventListener('input', function(){
            if(password.value.length > 7){
                password.classList.add("ok")
                password.classList.remove("bad")
                validationPassword= true
                console.log("prueba")
            }else{
                password.classList.add("bad")
                password.classList.remove("ok")
                console.log("prueba1")
                validationPassword= false
            }

        }),

        password.addEventListener('blur', function(){
            if(password.value.length > 7){
                password.classList.add("ok")
                password.classList.remove("bad")
                validationPassword= true
                console.log("prueba")
            }else{
                password.classList.add("bad")
                password.classList.remove("ok")
                console.log("prueba1")
                validationPassword= false
            }

        })


        repeatPassword.addEventListener('focus', function(){
            if( (repeatPassword.value.length > 7) && (repeatPassword.value === password.value) ){
                repeatPassword.classList.add("ok")
                repeatPassword.classList.remove("bad")
                validationRepeatPassword= true
                console.log("prueba")
            }else{
                repeatPassword.classList.add("bad")
                repeatPassword.classList.remove("ok")
                console.log("prueba1")
                validationRepeatPassword= false
            }

        }),

        repeatPassword.addEventListener('input', function(){
            if( (repeatPassword.value.length > 7) && (repeatPassword.value === password.value) ){
                repeatPassword.classList.add("ok")
                repeatPassword.classList.remove("bad")
                validationRepeatPassword= true
                console.log("prueba")
            }else{
                repeatPassword.classList.add("bad")
                repeatPassword.classList.remove("ok")
                console.log("prueba1")
                validationRepeatPassword= false
            }

        }),

        repeatPassword.addEventListener('blur', function(){
            if( (repeatPassword.value.length > 7) && (repeatPassword.value === password.value) ){
                repeatPassword.classList.add("ok")
                repeatPassword.classList.remove("bad")
                validationRepeatPassword= true
                console.log("prueba")
            }else{
                repeatPassword.classList.add("bad")
                repeatPassword.classList.remove("ok")
                console.log("prueba1")
                validationRepeatPassword= false
            }

        })


        address.addEventListener('focus', function(){
            if(address.value.length>2){
                address.classList.add("ok")
                address.classList.remove("bad")
                validationAddress= true
                console.log("prueba")
            }else{
                address.classList.add("bad")
                address.classList.remove("ok")
                console.log("prueba1")
                validationAddress= false
            }

        }),

        address.addEventListener('input', function(){
            if(address.value.length>2){
                address.classList.add("ok")
                address.classList.remove("bad")
                validationAddress= true
                console.log("prueba")
            }else{
                address.classList.add("bad")
                address.classList.remove("ok")
                console.log("prueba1")
                validationAddress= false
            }

        }),

        address.addEventListener('blur', function(){
            if(address.value.length>2){
                address.classList.add("ok")
                address.classList.remove("bad")
                validationAddress= true
                console.log("prueba")
            }else{
                address.classList.add("bad")
                address.classList.remove("ok")
                console.log("prueba1")
                validationAddress= false
            }

        })

        tel.addEventListener('focus', function(){
            if(tel.value.length>6 && tel.value.match(numberformat)){
                tel.classList.add("ok")
                tel.classList.remove("bad")
                validationTel= true
                console.log("prueba")
            }else{
                tel.classList.add("bad")
                tel.classList.remove("ok")
                console.log("prueba1")
                validationTel= false
            }

        }),

        tel.addEventListener('input', function(){
            if(tel.value.length>6 && tel.value.match(numberformat)){
                tel.classList.add("ok")
                tel.classList.remove("bad")
                validationTel= true
                console.log("prueba")
            }else{
                tel.classList.add("bad")
                tel.classList.remove("ok")
                console.log("prueba1")
                validationTel= false
            }

        }),

        tel.addEventListener('blur', function(){
            if(tel.value.length>6 && tel.value.match(numberformat)){
                tel.classList.add("ok")
                tel.classList.remove("bad")
                validationTel= true
                console.log("prueba")
            }else{
                tel.classList.add("bad")
                tel.classList.remove("ok")
                console.log("prueba1")
                validationTel= false
            }

        })
          

            image.addEventListener('focus', function(){
                if((extensionformat.test(image.value))|| (image.value.length==0)){
                    image.classList.add("ok")
                    image.classList.remove("bad")
                    validationImage= true
                    console.log("prueba")
                }else{
                    image.classList.add("bad")
                    image.classList.remove("ok")
                    console.log("prueba1")
                    validationImage= false
                    console.log(image.value)
                }
    
            }),
    
            image.addEventListener('input', function(){
                if((extensionformat.test(image.value))|| (image.value.length==0)){
                    image.classList.add("ok")
                    image.classList.remove("bad")
                    validationImage= true
                    console.log("prueba")
                }else{
                    image.classList.add("bad")
                    image.classList.remove("ok")
                    console.log("prueba1")
                    validationImage= false
                }
    
            }),
    
            image.addEventListener('blur', function(){
                if((extensionformat.test(image.value))|| (image.value.length==0)){
                    image.classList.add("ok")
                    image.classList.remove("bad")
                    validationImage= true
                    console.log("prueba")
                }else{
                    image.classList.add("bad")
                    image.classList.remove("ok")
                    console.log("prueba1")
                    validationImage= false
                }
    
            })    

    }

    // #############Validamos Edit###############

    if(form != null && form !="" && document.getElementById("formEdit") != null){
        console.log("entre register")
        let name= document.querySelector("#name"); 
        let lastName= document.querySelector("#lastName"); 
        let email= document.querySelector("#email"); 
        let password= document.querySelector("#password");
        let repeatPassword= document.querySelector("#repeatpassword");
        let address=document.querySelector("#address"); 
        let tel=document.querySelector("#tel");
        let image= document.querySelector("#image");  
        let validationName= true;
        let validationLastName= true;
        let validationEmail= true;
        let validationPassword= false;
        let validationRepeatPassword= false;
        let validationAddress= true;
        let validationTel= true;
        let validationImage= true;
        
        form.addEventListener('submit', function(e){                       
            if(validationName && validationLastName && validationPassword && validationEmail 
                && validationAddress && validationTel && validationImage && validationRepeatPassword){
                console.log('las validaciones fueron correctas');
            }else{
                e.preventDefault();
                window.alert("Los datos no están completos")
            }
        });

        name.addEventListener('focus', function(){
            if(name.value.length>2){
                name.classList.add("ok")
                name.classList.remove("bad")
                validationName= true
                console.log("prueba")
            }else{
                name.classList.add("bad")
                name.classList.remove("ok")
                console.log("prueba1")
                validationName= false
            }

        }),

        name.addEventListener('input', function(){
            if(name.value.length>2){
                name.classList.add("ok")
                name.classList.remove("bad")
                validationName= true
                console.log("prueba")
            }else{
                name.classList.add("bad")
                name.classList.remove("ok")
                console.log("prueba1")
                validationName= false
            }

        }),

        name.addEventListener('blur', function(){
            if(name.value.length>2){
                name.classList.add("ok")
                name.classList.remove("bad")
                validationName= true
                console.log("prueba")
            }else{
                name.classList.add("bad")
                name.classList.remove("ok")
                console.log("prueba1")
                validationName= false
            }

        })

        lastName.addEventListener('focus', function(){
            if(lastName.value.length>2){
                lastName.classList.add("ok")
                lastName.classList.remove("bad")
                validationLastName= true
                console.log("prueba")
            }else{
                lastName.classList.add("bad")
                lastName.classList.remove("ok")
                console.log("prueba1")
                validationLastName= false
            }

        }),

        lastName.addEventListener('input', function(){
            if(lastName.value.length>2){
                lastName.classList.add("ok")
                lastName.classList.remove("bad")
                validationLastName= true
                console.log("prueba")
            }else{
                lastName.classList.add("bad")
                lastName.classList.remove("ok")
                console.log("prueba1")
                validationLastName= false
            }

        }),

        lastName.addEventListener('blur', function(){
            if(lastName.value.length>2){
                lastName.classList.add("ok")
                lastName.classList.remove("bad")
                validationLastName= true
                console.log("prueba")
            }else{
                lastName.classList.add("bad")
                lastName.classList.remove("ok")
                console.log("prueba1")
                validationLastName= false
            }

        })

        email.addEventListener('focus', function(){
            if(email.value.match(mailformat)){
                email.classList.add("ok")
                email.classList.remove("bad")
                validationEmail= true
                console.log("prueba")
            }else{
                email.classList.add("bad")
                email.classList.remove("ok")
                console.log("prueba1")
                validationEmail= false
            }

        }),

        email.addEventListener('input', function(){
            if(email.value.match(mailformat)){
                email.classList.add("ok")
                email.classList.remove("bad")
                validationEmail= true
                console.log("prueba")
            }else{
                email.classList.add("bad")
                email.classList.remove("ok")
                console.log("prueba1")
                validationEmail= false
            }

        }),

        email.addEventListener('blur', function(){
            console.log(email)
            if(email.value.match(mailformat)){
                email.classList.add("ok")
                email.classList.remove("bad")
                validationEmail= true
                console.log("prueba")
            }else{
                email.classList.add("bad")
                email.classList.remove("ok")
                console.log("prueba1")
                validationEmail= false
            }

        })


        password.addEventListener('focus', function(){
            if(password.value.length > 7){
                password.classList.add("ok")
                password.classList.remove("bad")
                validationPassword= true
                console.log("prueba")
            }else{
                password.classList.add("bad")
                password.classList.remove("ok")
                console.log("prueba1")
                validationPassword= false
            }

        }),

        password.addEventListener('input', function(){
            if(password.value.length > 7){
                password.classList.add("ok")
                password.classList.remove("bad")
                validationPassword= true
                console.log("prueba")
            }else{
                password.classList.add("bad")
                password.classList.remove("ok")
                console.log("prueba1")
                validationPassword= false
            }

        }),

        password.addEventListener('blur', function(){
            if(password.value.length > 7){
                password.classList.add("ok")
                password.classList.remove("bad")
                validationPassword= true
                console.log("prueba")
            }else{
                password.classList.add("bad")
                password.classList.remove("ok")
                console.log("prueba1")
                validationPassword= false
            }

        })

        repeatPassword.addEventListener('focus', function(){
            if( (repeatPassword.value.length > 7) && (repeatPassword.value === password.value) ){
                repeatPassword.classList.add("ok")
                repeatPassword.classList.remove("bad")
                validationRepeatPassword= true
                console.log("prueba")
            }else{
                repeatPassword.classList.add("bad")
                repeatPassword.classList.remove("ok")
                console.log("prueba1")
                validationRepeatPassword= false
            }

        }),

        repeatPassword.addEventListener('input', function(){
            if( (repeatPassword.value.length > 7) && (repeatPassword.value === password.value) ){
                repeatPassword.classList.add("ok")
                repeatPassword.classList.remove("bad")
                validationRepeatPassword= true
                console.log("prueba")
            }else{
                repeatPassword.classList.add("bad")
                repeatPassword.classList.remove("ok")
                console.log("prueba1")
                validationRepeatPassword= false
            }

        }),

        repeatPassword.addEventListener('blur', function(){
            if( (repeatPassword.value.length > 7) && (repeatPassword.value === password.value) ){
                repeatPassword.classList.add("ok")
                repeatPassword.classList.remove("bad")
                validationRepeatPassword= true
                console.log("prueba")
            }else{
                repeatPassword.classList.add("bad")
                repeatPassword.classList.remove("ok")
                console.log("prueba1")
                validationRepeatPassword= false
            }

        })

        address.addEventListener('focus', function(){
            if(address.value.length>2){
                address.classList.add("ok")
                address.classList.remove("bad")
                validationAddress= true
                console.log("prueba")
            }else{
                address.classList.add("bad")
                address.classList.remove("ok")
                console.log("prueba1")
                validationAddress= false
            }

        }),

        address.addEventListener('input', function(){
            if(address.value.length>2){
                address.classList.add("ok")
                address.classList.remove("bad")
                validationAddress= true
                console.log("prueba")
            }else{
                address.classList.add("bad")
                address.classList.remove("ok")
                console.log("prueba1")
                validationAddress= false
            }

        }),

        address.addEventListener('blur', function(){
            if(address.value.length>2){
                address.classList.add("ok")
                address.classList.remove("bad")
                validationAddress= true
                console.log("prueba")
            }else{
                address.classList.add("bad")
                address.classList.remove("ok")
                console.log("prueba1")
                validationAddress= false
            }

        })

        tel.addEventListener('focus', function(){
            if(tel.value.length>6 && tel.value.match(numberformat)){
                tel.classList.add("ok")
                tel.classList.remove("bad")
                validationTel= true
                console.log("prueba")
            }else{
                tel.classList.add("bad")
                tel.classList.remove("ok")
                console.log("prueba1")
                validationTel= false
            }

        }),

        tel.addEventListener('input', function(){
            if(tel.value.length>6 && tel.value.match(numberformat)){
                tel.classList.add("ok")
                tel.classList.remove("bad")
                validationTel= true
                console.log("prueba")
            }else{
                tel.classList.add("bad")
                tel.classList.remove("ok")
                console.log("prueba1")
                validationTel= false
            }

        }),

        tel.addEventListener('blur', function(){
            if(tel.value.length>6 && tel.value.match(numberformat)){
                tel.classList.add("ok")
                tel.classList.remove("bad")
                validationTel= true
                console.log("prueba")
            }else{
                tel.classList.add("bad")
                tel.classList.remove("ok")
                console.log("prueba1")
                validationTel= false
            }

        })
          

            image.addEventListener('focus', function(){
                if((extensionformat.test(image.value))|| (image.value.length==0)){
                    image.classList.add("ok")
                    image.classList.remove("bad")
                    validationImage= true
                    console.log("prueba")
                }else{
                    image.classList.add("bad")
                    image.classList.remove("ok")
                    console.log("prueba1")
                    validationImage= false
                    console.log(image.value)
                }
    
            }),
    
            image.addEventListener('input', function(){
                if((extensionformat.test(image.value))|| (image.value.length==0)){
                    image.classList.add("ok")
                    image.classList.remove("bad")
                    validationImage= true
                    console.log("prueba")
                }else{
                    image.classList.add("bad")
                    image.classList.remove("ok")
                    console.log("prueba1")
                    validationImage= false
                }
    
            }),
    
            image.addEventListener('blur', function(){
                if((extensionformat.test(image.value))|| (image.value.length==0)){
                    image.classList.add("ok")
                    image.classList.remove("bad")
                    validationImage= true
                    console.log("prueba")
                }else{
                    image.classList.add("bad")
                    image.classList.remove("ok")
                    console.log("prueba1")
                    validationImage= false
                }
    
            })    

    }

    // #############Validamos Create Product###############

    if(form != null && form !="" && document.getElementById("formCreate") != null){
        console.log("entre create")
        let name= document.querySelector("#name"); 
        let description= document.querySelector("#description"); 
        let image= document.querySelector("#image");  
        let price= document.querySelector("#price"); 
        let discount= document.querySelector("#discount");
        let validationName= false;
        let validationDescription= false;
        let validationImage= true;
        let validationPrice= false;
        let validationDiscount= false;
                
        form.addEventListener('submit', function(e){                       
            if(validationName && validationDescription && validationImage && validationPrice 
                && validationDiscount ){
                console.log('las validaciones fueron correctas');
            }else{
                e.preventDefault();
                window.alert("Los datos no están completos")
            }
        });

        name.addEventListener('focus', function(){
            if(name.value.length>5){
                name.classList.add("ok")
                name.classList.remove("bad")
                validationName= true
                console.log("prueba")
            }else{
                name.classList.add("bad")
                name.classList.remove("ok")
                console.log("prueba1")
                validationName= false
            }

        }),

        name.addEventListener('input', function(){
            if(name.value.length>5){
                name.classList.add("ok")
                name.classList.remove("bad")
                validationName= true
                console.log("prueba")
            }else{
                name.classList.add("bad")
                name.classList.remove("ok")
                console.log("prueba1")
                validationName= false
            }

        }),

        name.addEventListener('blur', function(){
            if(name.value.length>5){
                name.classList.add("ok")
                name.classList.remove("bad")
                validationName= true
                console.log("prueba")
            }else{
                name.classList.add("bad")
                name.classList.remove("ok")
                console.log("prueba1")
                validationName= false
            }

        })

        description.addEventListener('focus', function(){
            if(description.value.length>20){
                description.classList.add("ok")
                description.classList.remove("bad")
                validationDescription= true
                console.log("prueba")
            }else{
                description.classList.add("bad")
                description.classList.remove("ok")
                console.log("prueba1")
                validationDescription= false
            }

        }),

        description.addEventListener('input', function(){
            if(description.value.length>20){
                description.classList.add("ok")
                description.classList.remove("bad")
                validationDescription= true
                console.log("prueba")
            }else{
                description.classList.add("bad")
                description.classList.remove("ok")
                console.log("prueba1")
                validationDescription= false
            }

        }),

        description.addEventListener('blur', function(){
            if(description.value.length>20){
                description.classList.add("ok")
                description.classList.remove("bad")
                validationDescription= true
                console.log("prueba")
            }else{
                description.classList.add("bad")
                description.classList.remove("ok")
                console.log("prueba1")
                validationDescription= false
            }

        })

        image.addEventListener('focus', function(){
            if((extensionformat.test(image.value))|| (image.value.length==0)){
                image.classList.add("ok")
                image.classList.remove("bad")
                validationImage= true
                console.log("prueba")
            }else{
                image.classList.add("bad")
                image.classList.remove("ok")
                console.log("prueba1")
                validationImage= false
                console.log(image.value)
            }

        }),

        image.addEventListener('input', function(){
            if((extensionformat.test(image.value))|| (image.value.length==0)){
                image.classList.add("ok")
                image.classList.remove("bad")
                validationImage= true
                console.log("prueba")
            }else{
                image.classList.add("bad")
                image.classList.remove("ok")
                console.log("prueba1")
                validationImage= false
            }

        }),

        image.addEventListener('blur', function(){
            if((extensionformat.test(image.value))|| (image.value.length==0)){
                image.classList.add("ok")
                image.classList.remove("bad")
                validationImage= true
                console.log("prueba")
            }else{
                image.classList.add("bad")
                image.classList.remove("ok")
                console.log("prueba1")
                validationImage= false
            }

        })    

        price.addEventListener('focus', function(){
            if(price.value.match(decimalformat)){
                price.classList.add("ok")
                price.classList.remove("bad")
                validationPrice= true
                console.log("prueba")
            }else{
                price.classList.add("bad")
                price.classList.remove("ok")
                console.log("prueba1")
                validationPrice= false
            }

        }),

        price.addEventListener('input', function(){
            if(price.value.match(decimalformat)){
                price.classList.add("ok")
                price.classList.remove("bad")
                validationPrice= true
                console.log("prueba")
            }else{
                price.classList.add("bad")
                price.classList.remove("ok")
                console.log("prueba1")
                validationPrice= false
            }

        }),

        price.addEventListener('blur', function(){
            if(price.value.match(decimalformat)){
                price.classList.add("ok")
                price.classList.remove("bad")
                validationPrice= true
                console.log("prueba")
            }else{
                price.classList.add("bad")
                price.classList.remove("ok")
                console.log("prueba1")
                validationPrice= false
            }
        })

        discount.addEventListener('focus', function(){
            if((discount.value.match(decimalformat)) && (discount.value<=1)){
                discount.classList.add("ok")
                discount.classList.remove("bad")
                validationDiscount= true
                console.log("prueba")
            }else{
                discount.classList.add("bad")
                discount.classList.remove("ok")
                console.log("prueba1")
                validationDiscount= false
            }

        }),

        discount.addEventListener('input', function(){
            if((discount.value.match(decimalformat)) && (discount.value<=1)){
                discount.classList.add("ok")
                discount.classList.remove("bad")
                validationDiscount= true
                console.log("prueba")
            }else{
                discount.classList.add("bad")
                discount.classList.remove("ok")
                console.log("prueba1")
                validationDiscount= false
            }


        }),

        discount.addEventListener('blur', function(){
            if((discount.value.match(decimalformat)) && (discount.value<=1)){
                discount.classList.add("ok")
                discount.classList.remove("bad")
                validationDiscount= true
                console.log("prueba")
            }else{
                discount.classList.add("bad")
                discount.classList.remove("ok")
                console.log("prueba1")
                validationDiscount= false
            }

        })
    }

    // #############Validamos Edit Product###############

    if(form != null && form !="" && document.getElementById("formProductEdit") != null){
        console.log("entre edit")
        let name= document.querySelector("#name"); 
        let description= document.querySelector("#description"); 
        let image= document.querySelector("#image");  
        let price= document.querySelector("#price"); 
        let discount= document.querySelector("#discount");
        let validationName= true;
        let validationDescription= true;
        let validationImage= true;
        let validationPrice= true;
        let validationDiscount= true;
                
        form.addEventListener('submit', function(e){                       
            if(validationName && validationDescription && validationImage && validationPrice 
                && validationDiscount ){
                console.log('las validaciones fueron correctas');
            }else{
                e.preventDefault();
                window.alert("Los datos no están completos")
            }
        });

        name.addEventListener('focus', function(){
            if(name.value.length>5){
                name.classList.add("ok")
                name.classList.remove("bad")
                validationName= true
                console.log("prueba")
            }else{
                name.classList.add("bad")
                name.classList.remove("ok")
                console.log("prueba1")
                validationName= false
            }

        }),

        name.addEventListener('input', function(){
            if(name.value.length>5){
                name.classList.add("ok")
                name.classList.remove("bad")
                validationName= true
                console.log("prueba")
            }else{
                name.classList.add("bad")
                name.classList.remove("ok")
                console.log("prueba1")
                validationName= false
            }

        }),

        name.addEventListener('blur', function(){
            if(name.value.length>5){
                name.classList.add("ok")
                name.classList.remove("bad")
                validationName= true
                console.log("prueba")
            }else{
                name.classList.add("bad")
                name.classList.remove("ok")
                console.log("prueba1")
                validationName= false
            }

        })

        description.addEventListener('focus', function(){
            if(description.value.length>20){
                description.classList.add("ok")
                description.classList.remove("bad")
                validationDescription= true
                console.log("prueba")
            }else{
                description.classList.add("bad")
                description.classList.remove("ok")
                console.log("prueba1")
                validationDescription= false
            }

        }),

        description.addEventListener('input', function(){
            if(description.value.length>20){
                description.classList.add("ok")
                description.classList.remove("bad")
                validationDescription= true
                console.log("prueba")
            }else{
                description.classList.add("bad")
                description.classList.remove("ok")
                console.log("prueba1")
                validationDescription= false
            }

        }),

        description.addEventListener('blur', function(){
            if(description.value.length>20){
                description.classList.add("ok")
                description.classList.remove("bad")
                validationDescription= true
                console.log("prueba")
            }else{
                description.classList.add("bad")
                description.classList.remove("ok")
                console.log("prueba1")
                validationDescription= false
            }

        })

        image.addEventListener('focus', function(){
            if((extensionformat.test(image.value))|| (image.value.length==0)){
                image.classList.add("ok")
                image.classList.remove("bad")
                validationImage= true
                console.log("prueba")
            }else{
                image.classList.add("bad")
                image.classList.remove("ok")
                console.log("prueba1")
                validationImage= false
                console.log(image.value)
            }

        }),

        image.addEventListener('input', function(){
            if((extensionformat.test(image.value))|| (image.value.length==0)){
                image.classList.add("ok")
                image.classList.remove("bad")
                validationImage= true
                console.log("prueba")
            }else{
                image.classList.add("bad")
                image.classList.remove("ok")
                console.log("prueba1")
                validationImage= false
            }

        }),

        image.addEventListener('blur', function(){
            if((extensionformat.test(image.value))|| (image.value.length==0)){
                image.classList.add("ok")
                image.classList.remove("bad")
                validationImage= true
                console.log("prueba")
            }else{
                image.classList.add("bad")
                image.classList.remove("ok")
                console.log("prueba1")
                validationImage= false
            }

        })    

        price.addEventListener('focus', function(){
            if(price.value.match(decimalformat)){
                price.classList.add("ok")
                price.classList.remove("bad")
                validationPrice= true
                console.log("prueba")
            }else{
                price.classList.add("bad")
                price.classList.remove("ok")
                console.log("prueba1")
                validationPrice= false
            }

        }),

        price.addEventListener('input', function(){
            if(price.value.match(decimalformat)){
                price.classList.add("ok")
                price.classList.remove("bad")
                validationPrice= true
                console.log("prueba")
            }else{
                price.classList.add("bad")
                price.classList.remove("ok")
                console.log("prueba1")
                validationPrice= false
            }

        }),

        price.addEventListener('blur', function(){
            if(price.value.match(decimalformat)){
                price.classList.add("ok")
                price.classList.remove("bad")
                validationPrice= true
                console.log("prueba")
            }else{
                price.classList.add("bad")
                price.classList.remove("ok")
                console.log("prueba1")
                validationPrice= false
            }
        })

        discount.addEventListener('focus', function(){
            if((discount.value.match(decimalformat)) && (discount.value<=1)){
                discount.classList.add("ok")
                discount.classList.remove("bad")
                validationDiscount= true
                console.log("prueba")
            }else{
                discount.classList.add("bad")
                discount.classList.remove("ok")
                console.log("prueba1")
                validationDiscount= false
            }

        }),

        discount.addEventListener('input', function(){
            if((discount.value.match(decimalformat)) && (discount.value<=1)){
                discount.classList.add("ok")
                discount.classList.remove("bad")
                validationDiscount= true
                console.log("prueba")
            }else{
                discount.classList.add("bad")
                discount.classList.remove("ok")
                console.log("prueba1")
                validationDiscount= false
            }


        }),

        discount.addEventListener('blur', function(){
            if((discount.value.match(decimalformat)) && (discount.value<=1)){
                discount.classList.add("ok")
                discount.classList.remove("bad")
                validationDiscount= true
                console.log("prueba")
            }else{
                discount.classList.add("bad")
                discount.classList.remove("ok")
                console.log("prueba1")
                validationDiscount= false
            }

        })
    }



})

function selectForm(){
    let actualForm = '';
        if(document.getElementById("formLogin") != null) {
        actualForm = document.querySelector("#formLogin");
    }
    if(document.getElementById("formRegister") != null) {
        actualForm = document.querySelector("#formRegister");
    }
    if(document.getElementById("formEdit") != null) {
        actualForm = document.querySelector("#formEdit");
    }
    if(document.getElementById("formCreate") != null) {
        actualForm = document.querySelector("#formCreate");
    }
    if(document.getElementById("formProductEdit") != null) {
        actualForm = document.querySelector("#formProductEdit");
    }
  
    return actualForm;
}