import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { PrincipalComponent } from "./components/principal/principal.component";
import { NavLoginComponent } from "./components/nav-login/nav-login.component";
import { FormLoginUserComponent } from "./components/form-login-user/form-login-user.component";
import { FormRegisterUserComponent } from "./components/form-register-user/form-register-user.component";

const register: Routes = [
  { path: "registerUser", component: FormRegisterUserComponent },
  { path: "", component: PrincipalComponent },
  { path: "loginUser", component: FormLoginUserComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    NavLoginComponent,
    FormLoginUserComponent,
    FormRegisterUserComponent
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(register)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
