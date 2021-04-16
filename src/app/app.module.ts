import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IpSearchComponent } from './ip-search/ip-search.component';
import { IpInfoComponent } from './ip-info/ip-info.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    IpSearchComponent,
    IpInfoComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
