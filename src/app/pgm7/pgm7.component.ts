import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-pgm7',
  templateUrl: './pgm7.component.html',
  styleUrls: ['./pgm7.component.css']
})
export class Pgm7Component implements OnInit {
   constructor(private obj7:Service1Service) { }
   x:any
   narray:String[]=[]
  dispnames()
  {
    this.narray=this.obj7.getinfo2();
  }
  ngOnInit(): void {
  }

}

