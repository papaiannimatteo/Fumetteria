import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationPageRoutingModule } from './registration-routing.module';

import { RegistrationPage } from './registration.page';
import { ImmagineDevskillComponent } from 'src/app/components/immagine-devskill/immagine-devskill.component';
import { BottonePersonalizzatoComponent } from 'src/app/components/bottone-personalizzato/bottone-personalizzato.component';
import { MessaggioComponent } from 'src/app/components/messaggio/messaggio.component';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [RegistrationPage,ImmagineDevskillComponent,BottonePersonalizzatoComponent,MessaggioComponent]
})
export class RegistrationPageModule {}
