import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-pgm5',
  templateUrl: './pgm5.component.html',
  styleUrls: ['./pgm5.component.css']
})
export class Pgm5Component implements OnInit {

  constructor(private obj1:Service1Service) {}

  xyz(getvalue:any)
  {this.obj1.abc(getvalue);}

  ngOnInit(): void {
  }

}
