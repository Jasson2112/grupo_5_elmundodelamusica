window.addEventListener("load" , function(){
    let login = document.querySelector("#formLogin");
    console.log("1")

    login.addEventListener("focus", function(){
        console.log("1")
    })

    login.addEventListener("blur", function(){
        console.log(1)
    })

    login.addEventListener("change", function(){
        console.log(1)
    })

})



// window.addEventListener("load",function(e){
        
//     let form = document.querySelector("#formLogin");
//     console.log("entrè")
//     let error= []
    
   
//     if(form != null && form !="" && document.getElementById("#formLogin") != null){
//         let email= document.querySelector("#email"); 
//                 let password= document.querySelector("#password");
//         let validationEmail= false;
//         let validationPassword= false;
        
//         form.addEventListener('submit', function(e){                       
//             if(validationPassword && validationEmail){
//                 console.log('las validaciones fueron correctas');
//             }else{
//                 e.preventDefault();
//             }
//         });

//         email.addEventListener('focus', function(){
//             if(isEmail(email)){
//                 email.classList.add("prueba")
//             }else{
//                 email.classList.add("prueba1")
//             }

//         }),

//         email.addEventListener('input', function(){
//             if(isEmail(email)){
//                 email.classList.add("prueba")
//             }else{
//                 email.classList.add("prueba1")
//             }

//         }),

//         email.addEventListener('blur', function(){
//             if(isEmail(email)){
//                 email.classList.add("prueba")
//             }else{
//                 email.classList.add("prueba1")
//             }

//         })
               
        
    


//     }

//     if(form != null && form !="" && document.getElementById("formLogin") != null){

//     }

//     if(form != null && form !="" && document.getElementById("formLogin") != null){

//     }



// }),

// function selectForm(){
//     let tempForm = '';
//     //Si estamos en la pantalla de LOGIN USER
//     if(document.getElementById("formLogin") != null) {
//         tempForm = document.querySelector("formLogin");
//     }
//     //Si estamos en la pantalla de REGISTER USER
//     if(document.getElementById("formRegister") != null) {
//         tempForm = document.querySelector("#formRegister");
//     }
//     //Si estamos en la pantalla de EDIT USER
//     if(document.getElementById("formEdit") != null) {
//         tempForm = document.querySelector("#formEdit");
//     }
  
//     return tempForm;
// }