import { Component, OnInit } from '@angular/core';
import { ListAllUsersService } from './list-all-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-all-users',
  templateUrl: './list-all-users.component.html',
  styleUrls: ['./list-all-users.component.css']
})
export class ListAllUsersComponent implements OnInit {

  constructor(private listAllUserService : ListAllUsersService, private router : Router) { }

  userData : any;
  userDataReq :any;
  ngOnInit() {
    this.listAllUserService.getAllUsers().subscribe((data)=>{
      console.log(data);
      this.userData = data;
      this.userDataReq = JSON.parse(this.userData._body);
      console.log(this.userDataReq);
    },err=>{

    });

  }

  editUser(user,index){
    console.log(user,index);
    this.listAllUserService.editUser = user;
    this.router.navigate(['home/editUser'])
  }

  deleteUser(user,i){
    console.log(user,i);
    this.listAllUserService.deleteUser().subscribe((data)=>{})
  }

}
