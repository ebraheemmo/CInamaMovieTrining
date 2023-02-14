import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PasswordconfirmComponent } from './login/passwordconfirm/passwordconfirm.component';
import { DashbordeComponent } from './Profile/dashborde/dashborde.component';
import { RegesterComponent } from './regester/regester.component';
import { RegisterationConfirmComponent } from './registeration-confirm/registeration-confirm.component';
import { ShowUserComponent } from './show-user/show-user.component';


const routes: Routes = [
  {path:'Home',component: HomeComponent},
  {path:'Login',component: LoginComponent},
  {path:'Regestertion',component:RegesterComponent},
  {path:'showUsers',component: ShowUserComponent},
  {path:'RegesterConf',component:RegisterationConfirmComponent},
  {path:'Passwordconfirm',component:PasswordconfirmComponent},
  {path:'Dashporde',component:DashbordeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
