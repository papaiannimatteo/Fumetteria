import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  c:number;
  f:number;
  km:number;
  mi:number;
  


  constructor() {}

  doSomething(event)
  {
    setTimeout(()=>{
      event.target.complete();
    },2000);
  }

  convertitore(unita:string):void{
    if ( unita ==='c') {

      this.f= this.arrotonda((this.c * 9/5) + 32);

    } else if (unita ==='f') {

      this.c= this.arrotonda((this.f -32) * 5/9);

    } else if (unita ==='km') {

      this.mi=this.arrotonda(this.km / 1609);

    } else{

      this.km=this.arrotonda(this.mi * 1609);
    }

  }
  
  arrotonda(risultato:number):number{
    return +risultato.toPrecision(3);
  }

 
  

  ngOnInit() {

  }

  

}