import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RegesterComponent } from './regester/regester.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { RegisterationConfirmComponent } from './registeration-confirm/registeration-confirm.component';
import { PasswordconfirmComponent } from './login/passwordconfirm/passwordconfirm.component';
import { DashbordeComponent } from './Profile/dashborde/dashborde.component';



@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    LoginComponent,
    RegesterComponent,
    ShowUserComponent,
    RegisterationConfirmComponent,
    //ResetpasswordComponent,
    PasswordconfirmComponent,
    DashbordeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
