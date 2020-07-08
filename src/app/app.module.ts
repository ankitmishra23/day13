import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionComponent } from './accordion/accordion.component';
import { ModelComponent } from './model/model.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TypeheadComponent } from './typehead/typehead.component';
import { PopoverComponent } from './popover/popover.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    ModelComponent,
    CarouselComponent,
    TypeheadComponent,
    PopoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
