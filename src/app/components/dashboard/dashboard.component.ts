import { Component, OnInit } from '@angular/core';
import { User } from "../../models/user";
import { UserService } from "../../service/user.service";
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public user: User;
  public role = null;

  constructor( service: UserService ) { 
    this.user = new User();
  }

  ngOnInit(): void {
    //this.getRol();
  }

  /*getRol() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.role = this.user.role;
  }*/

}
