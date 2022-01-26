import { ContactComponent } from './contact/contact.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [

    {path: '', redirectTo: 'inicio', pathMatch: 'full'},

    {path:'inicio', component: InicioComponent},
    {path:'about-us', component: AboutUsComponent},
    {path:'login', component: LoginComponent},
    {path :'register', component: RegisterComponent},
    {path:'contact', component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
