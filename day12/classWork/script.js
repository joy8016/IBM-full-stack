let form = document.getElementById("userform");

form.addEventListener("submit", (joy)=>{
    joy.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let number = document.getElementById("number").value;
    let password = document.getElementById("password").value;
    let confirmpassword= document.getElementById("confirmpassword").value;

    let obj = {
        name, email, number, password, confirmpassword
    }

    if(obj.password!==obj.confirmpassword){
        return alert("password do not match");
    }



    let tr = document.createElement("tr")

    let td1 = document.createElement("td")
    td1.innerText=obj.name;

    let td2 = document.createElement("td")
    td1.innerText=obj.email;

    let td3 = document.createElement("td")
    td1.innerText=obj.number;

    let td4 = document.createElement("td")
    td1.innerText=obj.password;

    let td5 = document.createElement("td")
    td1.innerText=obj.confirmpassword;

    tr.append(td1, td2, td3, td4, td5);

    document.getElementById("tbody").append(tr);

    document.getElementById("name").value;
    document.getElementById("email").value;
    document.getElementById("number").value;
    document.getElementById("password").value;
    document.getElementById("confirmpassword").value;

});