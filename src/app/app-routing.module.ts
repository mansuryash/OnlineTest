import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';
import { ViewComponent } from './view/view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  { path: "view", component: ViewComponent },

  { path: "upload", component: UploadComponent },

  { path: "home", component: HeaderComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
