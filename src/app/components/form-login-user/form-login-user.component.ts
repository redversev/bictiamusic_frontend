import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service'; 

@Component({
  selector: 'app-form-login-user',
  templateUrl: './form-login-user.component.html',
  styleUrls: ['./form-login-user.component.css']
})
export class FormLoginUserComponent implements OnInit {

  public user: User;
  public lastUser = null;
  public placeHolder = null;

  constructor(
    private service: UserService
  ) { }

  ngOnInit(): void {
    this.getLastUser();
  }

  getLastUser(){
    this.lastUser = localStorage.getItem('lastUser');
    console.log("El último usuario registrado: " + this.lastUser);
  }

}
