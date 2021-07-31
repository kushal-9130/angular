import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadingComponent } from './topheading/topheading.component';
import { TechComponent } from './tech/tech.component';
import { BusinessComponent } from './business/business.component';

const routes: Routes = [
  {
    path:'',
    component:TopheadingComponent
  },
  {
    path:'tech',
    component:TechComponent
  },
  {
    path:'business',
    component:BusinessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
