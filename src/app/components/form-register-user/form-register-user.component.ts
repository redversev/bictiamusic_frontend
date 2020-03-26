import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service'; 

@Component({
  selector: 'app-form-register-user',
  templateUrl: './form-register-user.component.html',
  styleUrls: ['./form-register-user.component.css']
})
export class FormRegisterUserComponent implements OnInit {

  public user: User;
  public isError = false;
  public messageError = null;
  public messageErrorDefault = "Los datos del formulario son incorrectos.";
  public formLogin: Form;
  public lastUser = null;

  constructor( 
    private router:Router,
    private service: UserService,

  ) { 
    this.user = new User();
  } 

  ngOnInit(): void {
  }

  validateForm(formLogin) {
    if(formLogin.valid== false){ 
          this.messageError = this.messageErrorDefault;
          this.isError = true;
          setTimeout(() => {
              this.isError = false;
          }, 3000);
    }
    else{
      if(formLogin.form.value.password != formLogin.form.value.passwordConfirm){
          this.messageError= "Los contraseñas no coinciden";
          this.isError = true;
          setTimeout(() => {
              this.isError = false;
              this.messageError = this.messageErrorDefault;
          }, 3000);
      }
      else{
        this.signUpUser();
        this.lastUser = formLogin.form.value.email;
      }

    }
  }

  signUpUser() {
    this.service.signUpUser(this.user).subscribe( (res:any) => {
      if( res.statusCode !== 200){
        this.isError=true;
        this.messageError = res.err;
          setTimeout(() => {
          this.isError=false;
          this.messageError = this.messageErrorDefault;
        }, 5000);
      }
      else{
        localStorage.setItem('lastUser', this.lastUser);
        this.router.navigate(['loginUser']);
      }

    })
  }

  
}
