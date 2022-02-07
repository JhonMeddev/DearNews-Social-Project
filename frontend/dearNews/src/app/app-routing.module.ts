import { MyPostsComponent } from './my-posts/my-posts.component';
import { EditUserComponent } from './edit/edit-user/edit-user.component';
import { DeleteTopicComponent } from './delete/delete-topic/delete-topic.component';
import { EditTopicComponent } from './edit/edit-topic/edit-topic.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TopicComponent } from './topic/topic.component';
import { EditPostComponent } from './edit/edit-post/edit-post.component';
import { DeletePostComponent } from './delete/delete-post/delete-post.component';

const routes: Routes = [

    {path: '', redirectTo: 'inicio', pathMatch: 'full'},

    {path:'inicio', component: InicioComponent},
    {path:'about-us', component: AboutUsComponent},
    {path:'contact', component: ContactComponent},

    {path:'login', component: LoginComponent},
    {path :'register', component: RegisterComponent},

    {path :'topic/:id', component: TopicComponent},

    {path: 'edit-topic/:id', component: EditTopicComponent},
    {path: 'delete-topic/:id', component: DeleteTopicComponent},

    {path: 'edit-post/:id', component: EditPostComponent},
    {path: 'delete-post/:id', component: DeletePostComponent},

    {path: 'edit-user/:id', component: EditUserComponent},

    {path: 'my-posts/:id', component: MyPostsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
