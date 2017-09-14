import { Injectable } from '@angular/core';
import {UserComponent} from "../user/user.component";
import { Router } from '@angular/router';

var users = [
  new UserComponent('admin','admin'),
  new UserComponent('admin1','admin1')
];

@Injectable()
export class AuthenticateService {
  checkLoginStatus: boolean = false;
  constructor(private _router: Router) { }

  checkUser(): boolean {
    if (localStorage.getItem("user") === undefined){
      this._router.navigate(['/login']);
    }

    return localStorage.getItem("user") === undefined ? false : true;
  }

  login(user) {
    let authenticatedUser = users.find(u => u.username === user.username);
    if (authenticatedUser !== undefined && authenticatedUser.password === user.password){
      localStorage.setItem("user", authenticatedUser.username);
      this.checkLoginStatus = true;
      this._router.navigate(['/clubs']);
      return true;
    }
    return false;
  }

  logout() :void{
    localStorage.removeItem("user");
    this.checkLoginStatus = false;
    this.checkUser;
  }
}