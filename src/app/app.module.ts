import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route66Component } from './route66/route66.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [AppComponent, Route66Component, Page404Component],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
