// import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pgm3',
  templateUrl: './pgm3.component.html',
  styleUrls: ['./pgm3.component.css']
})
export class Pgm3Component implements OnInit {
  x:boolean=true; 
  age:number=27
    invertx(){
 
  this.x=!this.x
  }
  function2()
  {
    this.age=25
  }
  
  constructor() { }

  ngOnInit(): void {
  }
}
