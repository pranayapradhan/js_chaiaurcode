class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}pranu`
    }

    set password(value){
        this._password = value
    }
}

const pranu = new User("pranu@pradhan.ai", "abc")
console.log(pranu.email);