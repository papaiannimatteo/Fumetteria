import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http: HttpClient) { }


  login(email:string, password:string){
    const credenziali={
      email,
      password,
    }

    return this.http.post<any>("http://2.44.173.210:7080/comic-be/api/login/login",credenziali)

  }
}
