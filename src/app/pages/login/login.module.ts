import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ImmagineDevskillComponent } from 'src/app/components/immagine-devskill/immagine-devskill.component';
import { BottonePersonalizzatoComponent } from 'src/app/components/bottone-personalizzato/bottone-personalizzato.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessaggioComponent } from 'src/app/components/messaggio/messaggio.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LoginPageRoutingModule,
    ReactiveFormsModule,
    
  ],
  declarations: [LoginPage,ImmagineDevskillComponent,BottonePersonalizzatoComponent,MessaggioComponent]
})
export class LoginPageModule {}
