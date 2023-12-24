function portal(){
    let username = document.getElementById("form2Example11").value;
    let password = document.getElementById("form2Example22").value;
    let error = document.getElementById("error");

   if(username === "admin" && password === "admin"){
        error.style.display = "none";
        location.replace("./homepage.html");
    }
    else{
        error.style.display = "block";
    }
}