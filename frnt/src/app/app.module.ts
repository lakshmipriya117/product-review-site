import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { Header2Component } from './header2/header2.component';
import { ReviewComponent } from './review/review.component';

import { SuggrevComponent } from './suggrev/suggrev.component';
import { ViewrevComponent } from './viewrev/viewrev.component';
import { Header3Component } from './header3/header3.component';
import { AddrevComponent } from './addrev/addrev.component';
import { HttpClientModule } from '@angular/common/http';
import { RevComponent } from './rev/rev.component';
import { UprevComponent } from './uprev/uprev.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    Header2Component,
    ReviewComponent,
  
    SuggrevComponent,
    ViewrevComponent,
    Header3Component,
    AddrevComponent,
    RevComponent,
    UprevComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
