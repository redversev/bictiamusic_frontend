import { Component, OnInit } from "@angular/core";
import { User } from "../../models/user";
import { UserService } from "../../service/user.service";
import { Router, RouterLink } from "@angular/router";
import Swal from "sweetalert2";

@Component({
  selector: "app-form-login-user",
  templateUrl: "./form-login-user.component.html",
  styleUrls: ["./form-login-user.component.css"],
})
export class FormLoginUserComponent implements OnInit {
  public user: User;
  public lastUser = null;
  public placeHolder = null;

  constructor(private router: Router, private service: UserService) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.getLastUser();
  }

  getLastUser() {
    this.lastUser = localStorage.getItem("lastUser");
    console.log("El último usuario registrado: " + this.lastUser);
  }

  login() {
    this.service.login(this.user).subscribe((res: any) => {
      switch (res.statusCode) {
        case 400:
          Swal.fire({
            icon: "error",
            text: "El usuario no esta registrado",
          });
          break;
        case 401:
          Swal.fire({
            icon: "error",
            text: "Los datos no son correctos",
          });
          break;
        case 200:
          Swal.fire({
            icon: "success",
            text: "Bienvenido a Bictia Music",
          });
          console.log(res);
          localStorage.setItem("user", JSON.stringify(res.dataUser));
          localStorage.setItem("token", JSON.stringify(res.token));
          this.router.navigate(["dashboard"]);
          break;
        default:
          Swal.fire({
            icon: "error",
            text: "Error de conexion",
          });
      }
    });
  }
}
