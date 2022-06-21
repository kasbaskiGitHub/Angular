
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pgm1',
  templateUrl: './pgm1.component.html',
  styleUrls: ['./pgm1.component.css']
})
export class Pgm1Component implements OnInit {
  name = "WinVinaya"
  city="Bangalore"
  pin=560076
  inpmsg="Please Enter your input"
  teampic="assets/team.jpg"
  method1()
  {
    alert("This is from a method called by button click event")
  }
  constructor() { }
  ngOnInit(): void {
  }
}