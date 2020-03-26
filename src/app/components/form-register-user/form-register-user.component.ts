import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-register-user',
  templateUrl: './form-register-user.component.html',
  styleUrls: ['./form-register-user.component.css']
})
export class FormRegisterUserComponent implements OnInit {

  public user: User;
  public isError = false;
  public messageError = "Los datos del formulario son incorrectos.";
  public formLogin: Form;

  constructor( 
    private router:Router
  ) { 
    this.user = new User();
  } 

  ngOnInit(): void {
  }

  validateForm(formLogin) {
    console.log(formLogin);
    if(formLogin.valid== false){ 
          this.isError = true;
          setTimeout(() => {
              this.isError = false;
              this.messageError = "Los datos del formulario son incorrectos.";
          }, 3000);
    }
    else{
      console.log(formLogin);
      if(formLogin.form.value.password != formLogin.form.value.passwordConfirm){
          this.messageError= "Los contraseñas no coinciden";
          this.isError = true;
          setTimeout(() => {
              this.isError = false;
              this.messageError = "Los datos del formulario son incorrectos.";
          }, 3000);
      }
      else{
        alert("Los datos son correctos, se procederá al registro en la API.");
        this.router.navigate(['loginUser']);
      }

    }
  }

  
}
