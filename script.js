const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");
const text = document.querySelector("#nomatch")
const inputs = document.querySelectorAll("input")
/*confirm.addEventListener("change",()=>{
    if(confirm.value === null || password.value === null){
        text.style.display="none"
    }
    else if(confirm.value === password.value){
        return text.style.display="none"
    }
    console.log("Password Dont Match!")
    text.style.display="block"
})*/
confirm.addEventListener("change",()=>{
    if(confirm.value === "" || password.value === ""){
        text.style.display="none"
        confirm.style.border="1.5px solid rgb(0, 255, 0)"
        password.style.border="1.5px solid rgb(0, 255, 0)"
    }
    else if(confirm.value !== password.value){
        text.style.display="block"
        confirm.style.border="1.5px solid red"
        return password.style.border="1.5px solid red"
    }
    text.style.display="none"
    confirm.style.border="1.5px solid rgb(0, 255, 0)"
    password.style.border="1.5px solid rgb(0, 255, 0)"
})