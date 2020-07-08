import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { ModelComponent } from './model/model.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TypeheadComponent } from './typehead/typehead.component';
import { PopoverComponent } from './popover/popover.component';


const routes: Routes = [
  {
    path:'accordion',
    component:AccordionComponent
  }
  ,
  {
    path:'model',
    component:ModelComponent
  },
  {
    path:'carousel',
    component:CarouselComponent
  },
  {
    path:'typehead',
    component:TypeheadComponent
  },
  {
    path:'popover',
    component:PopoverComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
