let username = document.getElementById("USER NAME")
let first_name = document.getElementById("FIRST_NAME")
let last_name = document.getElementById("LASRT_NAME")
let email = document.getElementById("EMAIL")
let password = document.getElementById("PASSWORD")
let list = document.getElementById("list")
const array = [];


class Form{
    constructor(username,first_name,last_name,email,password){
        this.username = username;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password = password;
    }
    print(){
        console.log(`${this.username} ${this.first_name} ${this.last_name} ${this.email} ${this.password}`);
    }
}


function clicked() {
    let obj = new Form(username.value,first_name.value,last_name.value,email.value,password.value);
    array.push(obj);
    console.log(array);
    obj.print();
    username.value = null;
    first_name.value = null;
    last_name.value = null;
    email.value = null;
    password.value = null;
    list.innerHTML = null;
    array.map((item) => {
        let li = ` <li>${item.username} - ${item.first_name} - ${item.email} - ${item.password} </li>`
        list.innerHTML += li;
    })
}

