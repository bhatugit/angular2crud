import { Component, OnInit } from '@angular/core';
import { ListAllUsersService } from '../list-all-users/list-all-users.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NewUser } from '../new-user/new-user';
import { AddNewUserService } from '../new-user/add-new-user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  addNewUserForm : FormGroup;
  newUser : NewUser;
  constructor(private listAllUsers: ListAllUsersService,private fb : FormBuilder , private addNewUserService : AddNewUserService) { }

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

onClickAddNewUser(addNewUserForm){
console.log(addNewUserForm)
}
}
