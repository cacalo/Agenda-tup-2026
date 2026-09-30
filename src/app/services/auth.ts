import { Service } from '@angular/core';
import { LoginForm } from '../interfaces/login';

@Service()
export class Auth {

async login(loginData: LoginForm):Promise<boolean>{

const res = await fetch("http://localhost:5000/api/authentication/authenticate",{
        method: "POST",
        headers: {
            "content-type" : "application/json"
        },
        body : JSON.stringify({
            email: loginData.email,
            password: loginData.password
        })
    })
    if (!res.ok) return false;
    const resBody = await res.text()
    // GUARDAR EL TOKEN - TODO

    return true;

}

register(){

}

}
