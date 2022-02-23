import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ImagineComponent } from './imagine/imagine.component';
import { SvgModule } from '../svg/svg.module';


@NgModule({
  declarations: [ImagineComponent],
  imports: [
    CommonModule,
    HomeRoutingModule, 
    SvgModule
  ]
})
export class HomeModule { }
