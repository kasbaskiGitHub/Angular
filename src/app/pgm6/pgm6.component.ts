import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-pgm6',
  templateUrl: './pgm6.component.html',
  styleUrls: ['./pgm6.component.css']
})
export class Pgm6Component implements OnInit {
n:any;
  constructor(private obj2:Service1Service) { }
  getvalue:any=this.obj2.passvalue; 
 
  infoRec1:String[]=[]
  getinfoRec1()
  {
    this.infoRec1=this.obj2.getinfo1();
  }
  ngOnInit(): void {
  }

}
