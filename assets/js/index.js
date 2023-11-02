function myLogin(){
    const myName = document.getElementById("username");
    const myPassword = document.getElementById("password");
    const name = document.getElementById("name");
    if(myName.value === "" && myPassword.value ===""|| myName.value ==="" && myPassword.value===""){
        alert("Please Fill In The Input")
    }
    else if(myName.value === "batombari" && myPassword.value === "batom12"){
        location.replace("./homepage.html");
        name.innerHTML ="Batombari";
    }
    else{
        alert("Invalid Login information")
    }

}