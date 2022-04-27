import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username:string="Matteo";
  password:string="bellapass";
  funzioneBott() {
    alert("Ciao "+this.username + " hai inserito questa password: "+this.password);
}
  



  constructor() { 
    
  }

  ngOnInit() {
  }

}
