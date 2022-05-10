import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UtentePageRoutingModule } from './utente-routing.module';

import { UtentePage } from './utente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UtentePageRoutingModule
  ],
  declarations: [UtentePage]
})
export class UtentePageModule {}
