import { ChangepasswordComponent } from './login/changepassword/changepassword.component';
import { RegisterComponent } from './login/register/register.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "login", component: SignInComponent },


  { path: "register", component: RegisterComponent },

  { path: "changepass", component: ChangepasswordComponent }

];

export const LoginRoutes = RouterModule.forChild(routes);
