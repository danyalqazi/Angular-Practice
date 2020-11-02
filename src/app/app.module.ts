import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms';
import {HttpClientModule } from '@angular/common/http';
// import {HomeModule} from './home/home.module';
// import {AboutModule} from './about/about.module';
// import {ServicesModule} from './services/services.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule ,
    FormsModule,
    HttpClientModule
  //  HomeModule,
  //   AboutModule,
  //   ServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
