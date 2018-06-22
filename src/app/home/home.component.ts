import { Component, OnInit } from '@angular/core';
import { ListAllUsersService } from './list-all-users/list-all-users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private listAllUserService : ListAllUsersService) { }

  ngOnInit() {
  }

  setNull(){
    console.log('dxhfhsdfhs')
   this.listAllUserService.editUser = {
    Name : '',
    Address : '',
    EmailAddress : ''
  }
}
}
