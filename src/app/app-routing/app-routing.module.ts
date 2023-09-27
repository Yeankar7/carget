import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HirecarsComponent } from '../hirecars/hirecars.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'hirecars',
    component: HirecarsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
