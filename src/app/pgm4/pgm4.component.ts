import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pgm4',
  templateUrl: './pgm4.component.html',
  styleUrls: ['./pgm4.component.css']
})
export class Pgm4Component implements OnInit {
  emp=["Akila", "Shiva", "Robert", "winvinaya",'S',100, true]​
  langcode:any;
  langfunction(c:any)
  {this.langcode=c}
  constructor() { }

  ngOnInit(): void {
  }

}
