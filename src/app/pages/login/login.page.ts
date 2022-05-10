import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:string="";
  password:string="";
  funzioneBott() {
    alert("Ciao "+this.username + " hai inserito questa password: "+this.password);
}

  myForm: FormGroup;
  



  constructor(private fb:FormBuilder) { 
    
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ["Inserisci username qui"],

      password: ["Inserisci password qui"],


    })
  }

}
