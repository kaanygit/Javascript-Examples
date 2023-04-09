const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const repassword=document.getElementById('repassword');

function error(input,message){
    input.className='form-control is-invalid';
    const div=input.nextElementSibling;//ici boş olan div tagına gidiyo
    div.innerText=message;
    div.className='invalid-feedback';
}
function success(input){
    input.className='form-control is-valid';
} 

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value)){
        success(input);
    }else{
        error(input,'Email is mistake');
    }
}


function checkRequired(inputs){
    inputs.forEach(function(input){
        if(input.value===''){
            error(input,`${input.id} is required.`);
        }else{
            success(input);
            alert("Başarılı bir şekilde kayıt oldunuz");
            input.preventDefault();
        }
    })

}

function checkLength(input, min, max) {
    if (input.value.length < min) {
        error(input, `${input.id} en az ${min} karakter olmalıdır`);
    }else if (input.value.length > max) {
        error(input, `${input.id} en fazla ${max} karakter olmalıdır`);
    }else {
        success(input);
    }
}

function checkPasswords(input1,input2){
    if(input1.value !== input2.value){
        error(input2,'Parolalar eşleşmiyor');
    }
}

function checkPhone(input){
    var exp=/^\d{10}$/;
    if(!exp.test(input.value)){
        error(input,'Telefon numarası 10 karakterli olmalıdır')
    }
}



form.addEventListener('submit',function(e){

    e.preventDefault();    
    checkRequired([username,email,password,repassword,phone]);
    checkEmail(email); 
    checkLength(username,7,28);
    checkLength(password,8,12);
    checkPasswords(password,repassword);
    checkPhone(phone);
    // console.log(`Username Value = ${username.value}`);
    // console.log(`Username Value = ${email.value}`); //GİRİLEN DEGERLERİ CONSOLE YAZDIRIR
    // console.log(`Username Value = ${password.value}`);
    // console.log(`Username Value = ${repassword.value}`);

    // if(username.value == ''){
    //     // username.className='form-control error'
    //     error(username,'username required');
    // }else{
    //     success(username);
    // }

    // if(email.value == ''){
    //     // username.className='form-control error'
    //     error(email,'E-mail required');
    // }else if(!validateEmail(email.value)){
    //     error(email,'Please enter a valid email address');
    // }    
    // else{
    //     success(email);
    // }
    // if(password.value == ''){
    //     // username.className='form-control error'
    //     error(password,'password required');
    // }else{
    //     success(password);
    // }
    // if(repassword.value == ''){
    //     // username.className='form-control error'
    //     error(repassword,'repassword required');
    // }else{
    //     success(repassword);
    // }
});