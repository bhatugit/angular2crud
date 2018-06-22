import { Injectable } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { NewUser } from '../new-user/new-user';
import { Observable } from 'rxjs/Observable';
import { Options } from 'selenium-webdriver';
import { Response } from '@angular/http';
import { Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ListAllUsersService {
  editUser : any;
  constructor( public _http: Http,) { }

  getAllUsers(){
    return this._http.get('assets/userData.json')
  };

  deleteUser(){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.delete('assets/userData.json')
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

  public extractData(res: Response) {
    const body = res.json();
    return body;
  }

}
