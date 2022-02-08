import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AboutUsComponent } from './about-us/about-us.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { MenuUserComponent } from './menu-user/menu-user.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { TopicComponent } from './topic/topic.component';
import { EditPostComponent } from './edit/edit-post/edit-post.component';
import { EditTopicComponent } from './edit/edit-topic/edit-topic.component';
import { DeletePostComponent } from './delete/delete-post/delete-post.component';
import { DeleteTopicComponent } from './delete/delete-topic/delete-topic.component';
import { EditUserComponent } from './edit/edit-user/edit-user.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { Routes,RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent,
    AboutUsComponent,
    FooterComponent,
    InicioComponent,
    TopicComponent,
    MenuUserComponent,
    EditPostComponent,
    EditTopicComponent,
    DeletePostComponent,
    DeleteTopicComponent,
    EditUserComponent,
    MyPostsComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule,
  ],
  providers: [{
    provide : LocationStrategy,
    useClass : HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
