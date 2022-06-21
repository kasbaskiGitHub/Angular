import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  passvalue="";
  info1:String[]=["Ramesh","Kumar", "Usha"];
  info2:String[]=["Ram","suresh", "Uma"];
  abc(commonvalue:any)
  { this.passvalue=commonvalue;
    console.log("This is from service. Pgm5 sent the value: "+this.passvalue)
  }
  getinfo1():String[]
  { return this.info1;
  }
  getinfo2():String[]
  { return this.info2;
  }
  
  constructor() { }
}
