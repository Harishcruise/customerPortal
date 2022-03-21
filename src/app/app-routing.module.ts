import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landingPage/landingPage.component';

const routes: Routes = [
  {
    path:'home',
    component:LandingPageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
