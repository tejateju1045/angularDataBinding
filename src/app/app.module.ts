import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EventdemoComponent } from './eventdemo/eventdemo.component';
import { InterpolationdemoComponent } from './interpolationdemo/interpolationdemo.component';
import { PropertydemoComponent } from './propertydemo/propertydemo.component';
import { TwowaydemoComponent } from './twowaydemo/twowaydemo.component';

@NgModule({
  declarations: [
    AppComponent,
    EventdemoComponent,
    InterpolationdemoComponent,
    PropertydemoComponent,
    TwowaydemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
