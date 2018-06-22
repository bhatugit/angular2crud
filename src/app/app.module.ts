import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewUserComponent } from './home/new-user/new-user.component';
import { ListAllUsersComponent } from './home/list-all-users/list-all-users.component';
import { ListAllUsersService } from './home/list-all-users/list-all-users.service';
import { AddNewUserService } from './home/new-user/add-new-user.service';
import { EditUserComponent } from './home/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewUserComponent,
    ListAllUsersComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent ,
        children : [
          {path:'addNewUser' , component : NewUserComponent},
          {
            path:'listAllUsers' , component : ListAllUsersComponent
          },
          {
            path:'editUser' , component : EditUserComponent
          }
        ]
      },
    ])
  ],
  providers: [ListAllUsersService , AddNewUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
