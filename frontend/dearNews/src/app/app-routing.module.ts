import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

    {path: '', redirectTo: 'menu', pathMatch: 'full'},

    {path:'menu', component: MenuComponent},
    {path:'login', component: LoginComponent},
    {path :'register', component: RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
