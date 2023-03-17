import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RegisterComponent } from '../register/register.component';
import { LoginComponent } from '../login/login.component';



const routes: Routes = [
  
{
  path:"",
  redirectTo:"/landing",
  pathMatch:"full"
},
{
  path:"landing",
  component:LandingComponent
},
{
  path:"header",
  component:HeaderComponent
},
{
  
    path:"footer",
    component:FooterComponent
  
},
{
  path:"register",
  component:RegisterComponent
},

{
  path:"login",
  component:LoginComponent
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }