import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserDto } from 'src/app/model/package/dto/user-dto';
import { LoginServiceService } from './login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  myForm: FormGroup;
  
  constructor(private fb:FormBuilder, private Login: LoginServiceService) { 
    
  }

  funzioneBott() {
    this.Login.login(this.myForm.get('username').value, this.myForm.get("password").value).subscribe(response => {
      const user: UserDto = response;
      console.log(user);
    })
   
     alert("Ciao "+this.myForm.controls["username"].value + " hai inserito questa password: "+this.myForm.controls["password"].value);
 }

  ngOnInit() {
    this.myForm = this.fb.group({
      username: ['', [Validators.email, Validators.required]],

      password: ['', [Validators.pattern, Validators.required, Validators.minLength(4)]],


    })
  }

}
