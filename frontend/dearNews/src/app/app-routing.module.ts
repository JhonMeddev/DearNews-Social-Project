import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [

    {path: '', redirectTo: 'about-us', pathMatch: 'full'},

    {path:'about-us', component: AboutUsComponent},
    {path:'login', component: LoginComponent},
    {path :'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
