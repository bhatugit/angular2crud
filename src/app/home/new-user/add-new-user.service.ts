import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { Options } from 'selenium-webdriver';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import {NewUser} from './new-user'
@Injectable()
export class AddNewUserService {

  constructor(public _http: Http,) { }

  addUser(newUser){
    console.log(newUser);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post('D:/angular-4-sample-app-master/src/assets/userData.json',{
      Name: newUser.Name,
      Address: newUser.Address,
      EmailAddress : newUser.EmailAddress
    },options);
  }

}
