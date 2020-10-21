import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { HttpClientModule } from "@angular/common/http";

import { InMemoryDataService } from "./in-memory-data.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      put204: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
