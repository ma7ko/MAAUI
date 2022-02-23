import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadOutlineComponent } from './head-outline/head-outline.component';
import { SketchGirlComponent } from './sketch-girl/sketch-girl.component';
import { OrnamentComponent } from './ornament/ornament.component';
import { AudienceComponent } from './audience/audience.component';



@NgModule({
  declarations: [HeadOutlineComponent, 
    SketchGirlComponent, 
    OrnamentComponent, 
    AudienceComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeadOutlineComponent,
    SketchGirlComponent,
    OrnamentComponent,
    AudienceComponent
  ]
})
export class SvgModule { }
