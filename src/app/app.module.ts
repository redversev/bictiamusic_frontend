import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { UserService } from './service/user.service'; //nueva para la conexion con
import { HttpClientModule } from '@angular/common/http'; //las llamadas http
import { CommonModule } from '@angular/common';

import { AppComponent } from "./app.component";
import { PrincipalComponent } from "./components/principal/principal.component";
import { NavLoginComponent } from "./components/nav-login/nav-login.component";
import { FormLoginUserComponent } from "./components/form-login-user/form-login-user.component";
import { FormRegisterUserComponent } from "./components/form-register-user/form-register-user.component";
import { MusicListComponent } from './components/music-list/music-list.component';
import { MusicAdminComponent } from './components/music-admin/music-admin.component';
import { FormModifyUserComponent } from './components/form-modify-user/form-modify-user.component';
import { NavOptionsComponent } from './components/nav-options/nav-options.component';
import { SearchComponent } from './components/search/search.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavDashboardComponent } from './components/nav-dashboard/nav-dashboard.component';
import { MusicControlsComponent } from './components/music-controls/music-controls.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { SongService } from './service/song.service';
import { AddMusicComponent } from './components/add-music/add-music.component';
import { EditMusicComponent } from './components/edit-music/edit-music.component';
import { CancionesFavoritasComponent } from './components/canciones-favoritas/canciones-favoritas.component';
import { SearchMusicComponent } from './components/search-music/search-music.component';


const register: Routes = [
  { path: "", component: PrincipalComponent },
  { path: "registerUser", component: FormRegisterUserComponent },
  { path: "loginUser", component: FormLoginUserComponent },
  { path: "dashboard", component:  DashboardComponent, children: [
  	{ path:"", component: MusicListComponent },
  	{ path:"favoriteSongs", component: CancionesFavoritasComponent }
  ] },
  { path: "acerca", component: AboutUsComponent },
  { path: "admin", component: MusicAdminComponent },
  { path: "updateUser", component:  FormModifyUserComponent},
  { path: "addMusic", component: AddMusicComponent },
  { path: "editMusic", component: EditMusicComponent},
  { path: 'musicSearch', component: SearchMusicComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    NavLoginComponent,
    FormLoginUserComponent,
    FormRegisterUserComponent,
    MusicListComponent,
    MusicAdminComponent,
    FormModifyUserComponent,
    NavOptionsComponent,
    SearchComponent,
    DashboardComponent,
    NavDashboardComponent,
    MusicControlsComponent,
    AboutUsComponent,
    CancionesFavoritasComponent,
    AddMusicComponent,
    EditMusicComponent,
    SearchMusicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(register),
    HttpClientModule,
    CommonModule
  ],
  providers: [
    UserService,
    SongService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
