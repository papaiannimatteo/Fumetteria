import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-super-mario',
  templateUrl: './super-mario.page.html',
  styleUrls: ['./super-mario.page.scss'],
})
export class SuperMarioPage implements OnInit {
  myForm: FormGroup;
  @Input()numeroMuri: number;
  @Input()altezzeMuri: number[] = [];
  high: number = 0;
  low: number = 0;

 

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm=this.fb.group ({
      salti: new FormControl(),
      altezze: new FormControl(),
      risultato: new FormControl(),
    })

  if (this.input <= 10) {
      while (this.altezzeMuri.length < this.numeroMuri) {
          this.altezzeMuri.push(this.input);
          
  
      }
  
  } else {
      alert("L'altezza inserita è troppo alta! Riavvia il programma.");
  }
  
  
  
  for (let i = 0; i < this.altezzeMuri.length - 1; i++) {
  
      if (this.altezzeMuri[i] > this.altezzeMuri[i + 1]) {
          this.low++;
  
      } else {
          this.high++;
  
      }
  
  
  }
  }

}
