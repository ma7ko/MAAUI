import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagineComponent } from './imagine/imagine.component';


const routes: Routes = [
  { path: 'imagine', component: ImagineComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
