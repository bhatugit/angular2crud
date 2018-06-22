import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddNewUserService } from './add-new-user.service';
import {NewUser} from './new-user'
import { Http } from '@angular/http';
import { ListAllUsersService } from '../list-all-users/list-all-users.service';
import { environment } from 'environments/environment';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  API_URL = environment.apiUrl;
  addNewUserForm : FormGroup;
  newUser : NewUser;
  constructor(private fb : FormBuilder , private addNewUserService : AddNewUserService, private _http:Http,private listAllUsers: ListAllUsersService) { 

  }

  
  ngOnInit() {
    if(this.listAllUsers.editUser){
      this.addNewUserForm = this.fb.group({
        'Name': [this.listAllUsers.editUser.Name, Validators.required],
        'Address': [this.listAllUsers.editUser.Address, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
        'EmailAddress': [this.listAllUsers.editUser.EmailAddress, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(20)])],
      });
    }else{
      this.addNewUserForm = this.fb.group({
        'Name': [null, Validators.required],
        'Address': [null, Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(40)])],
        'EmailAddress': [null, Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(20)])],
      });
    }
  }

  onClickAddNewUser(newUser){
    this.newUser = {
      Name : newUser.Name,
      Address : newUser.Address,
      EmailAddress : newUser.EmailAddress
    }
    this._http.post(this.API_URL+'/todos',JSON.stringify(this.newUser)).subscribe((data)=>{
      console.log(data);
    },err=>{
      console.log("error occured");
    });
  }



}
