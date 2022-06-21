import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pgm1Component } from './pgm1/pgm1.component';
import { Pgm2Component } from './pgm2/pgm2.component';
import { Pgm3Component } from './pgm3/pgm3.component';
import { Pgm4Component } from './pgm4/pgm4.component';
import { Pgm5Component } from './pgm5/pgm5.component';
import { Pgm6Component } from './pgm6/pgm6.component';
import { Pgm7Component } from './pgm7/pgm7.component';
import { Pgm8PipesComponent } from './pgm8-pipes/pgm8-pipes.component';
// import { Pgm2Component } from './pgm2/pgm2.component';

const routes: Routes = [
  {path:'pgm1',
   component:Pgm1Component
  },
  {path:'pgm2',
   component:Pgm2Component
  },
  {path:'pgm3',
   component:Pgm3Component
  },
  {path:'pgm4',
   component:Pgm4Component
  },
  {path:'pgm5',
  component:Pgm5Component
 },
 {path:'pgm6',
 component:Pgm6Component
},
{path:'pgm7',
component:Pgm7Component
},
{path:'pgm8-pipes',
component:Pgm8PipesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
