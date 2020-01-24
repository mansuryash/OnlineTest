import { LoginRoutes } from './../login.routing';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';



@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutes
  ],
  declarations: [LoginComponent,
    ChangepasswordComponent,
    RegisterComponent,
    SignInComponent
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
