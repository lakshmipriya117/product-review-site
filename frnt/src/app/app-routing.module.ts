import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { from } from 'rxjs';
import { AboutComponent } from './about/about.component';
import { AddrevComponent } from './addrev/addrev.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { RevComponent } from './rev/rev.component';
import { ReviewComponent } from './review/review.component';
import { SignupComponent } from './signup/signup.component';
import { SuggrevComponent } from './suggrev/suggrev.component';

import { UprevComponent } from './uprev/uprev.component';
import { ViewrevComponent } from './viewrev/viewrev.component';
const routes: Routes = [{path:'',component:HomeComponent},
{path:'signup',component:SignupComponent},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'review',component:ReviewComponent},

{path:'suggrev',component:SuggrevComponent},
{path:'viewrev',component:ViewrevComponent},
{path:'addrev',component:AddrevComponent},
{path:'rev',component:RevComponent},
{path:'uprev',component:UprevComponent},
{path:'about',component:AboutComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
