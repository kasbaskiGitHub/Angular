import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pgm8-pipes',
  templateUrl: './pgm8-pipes.component.html',
  styleUrls: ['./pgm8-pipes.component.css']
})
export class Pgm8PipesComponent implements OnInit {
  name:any='WinVinayA'
  
  today=new Date()
  
  num:number=3.14
  
  title = 'my-first-app';  
  
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun',  
      'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];  
  
  names = ['Jeevan', 'Kushal', 'Harshith','Meghana', 'ANIL','MOHAN']
  
  constructor() { }

  ngOnInit(): void {
  }

}
