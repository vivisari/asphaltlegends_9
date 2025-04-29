const form = document.getElementById("Registerform")
const errormsg = document.getElementById("error")
error.style.display ="none"

form.addEventListener("submit", function(event){
    event.preventDefault()

    let User = document.getElementById("Name").value
    let Emails = document.getElementById("emails").value

    if(User.length == 0){
        errormsg.style.display ="block"
        errormsg.innerHTML = "Username Must be Filled"
        return
    }
    if(Emails.length == 0){
        errormsg.style.display ="block"
        errormsg.innerHTML = "Email Must be Filled"
        return
    }

    let Dob = document.getElementById("dob").value

    if(Dob.length == 0){
        errormsg.style.display ="block"
        errormsg.innerHTML = "Date of Birth Must be Filled"
        return
    }

    let tos = document.getElementById("toc").checked
    let agree = ""

    if(tos == true){
        agree = "Agreed"
    }
    else{
        agree = "Not Agreed"
    }

    if(agree == "Not Agreed"){
        errormsg.style.display ="block"
        errormsg.innerHTML = "TOS Must be Checked"
        return
    }

    error.style.display ="none"
    window.location.href = "Home.html"
})