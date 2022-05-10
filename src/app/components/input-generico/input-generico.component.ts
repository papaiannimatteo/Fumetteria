import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-generico',
  templateUrl: './input-generico.component.html',
  styleUrls: ['./input-generico.component.scss'],
})
export class InputGenericoComponent implements OnInit {
@Input() unita1:string;
@Input() unita2:string;

valore1:number;
valore2:number;

  

  constructor() { }

  ngOnInit() {}



  calcolaConversione(unita: string, valore:number): number{
    if (unita === "C") {
      return this.arrotonda (((9/5) * valore) +32);
    } else if (unita === "F"){
      return this.arrotonda ((valore -32) * (5/9));
    } else if (unita === "MI"){
      return this.arrotonda (valore * 1609);
    } else if (unita === "KM"){
      return this.arrotonda (valore / 1609);
    }
      
  }

  converti(indice: number): void{
    let valore = 0;

    if (indice === 1){
      this.valore2 = this.calcolaConversione(this.unita1,this.valore1);
    } else {
      this.valore1 = this.calcolaConversione(this.unita2,this.valore2);
    }
  }

  arrotonda(risultato : number): number{
    return +risultato.toPrecision(3);
  }




}

 
 

  