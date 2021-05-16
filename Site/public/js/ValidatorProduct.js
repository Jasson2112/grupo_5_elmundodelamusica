window.addEventListener("load",function(e){

    let numberformat = /^[0-9]+$/; //expresion para validar numeros
    let extensionformat = (/\.(jpeg|jpg|png|gif)$/i) //expresion para validar extensión de fotos
    
    let form = selectForm();
    console.log("entrè")
    
    

    // #############Validamos Create###############

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
            if(price.value.match(numberformat)){
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
            if(price.value.match(numberformat)){
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
            if(price.value.match(numberformat)){
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
            if(discount.value.match(numberformat)){
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
            if(discount.value.match(numberformat)){
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
            if(discount.value.match(numberformat)){
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

    // #############Validamos Edit###############

    if(form != null && form !="" && document.getElementById("formCreate") != null){
        console.log("entre create")
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
            if(price.value.match(numberformat)){
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
            if(price.value.match(numberformat)){
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
            if(price.value.match(numberformat)){
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
            if(discount.value.match(numberformat)){
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
            if(discount.value.match(numberformat)){
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
            if(discount.value.match(numberformat)){
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
        if(document.getElementById("formCreate") != null) {
        actualForm = document.querySelector("#formCreate");
    }
    if(document.getElementById("formRegister") != null) {
        actualForm = document.querySelector("#formProductEdit");
    }
      
    return actualForm;
}