import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import { UserService } from "../../service/user.service";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-nav-dashboard',
  templateUrl: './nav-dashboard.component.html',
  styleUrls: ['./nav-dashboard.component.css']
})
export class NavDashboardComponent implements OnInit {
  public userName = null;
  public role = null;
  public class = null;
  public user: User;
  public rojo: Boolean = false;

  constructor(private _userService: UserService) { 
    this.user = new User();
  }

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.userName = this.user.firstName + " " + this.user.lastName;
    this.role = this.user.role;
    if(this.role === 'ADMIN'){
      this.class = 'dashboardNavAdmin';
    }
  }
  openSearch(){
    console.log("OpenSearch");
    document.getElementById('buscador').classList.toggle("abrirBuscador");
  }

  logout(){
    this._userService.logout();
  }
}