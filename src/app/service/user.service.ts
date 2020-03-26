import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
    apiURL = 'http://localhost:3000/api'
    constructor(
        private http: HttpClient
    ) { }

    /**
     * Funcion para registrar un nuevo usuario
     * @param userParams Datos del usuario.
     */
    signUpUser(userParams) {
        console.log(userParams);
        const params = JSON.stringify(userParams); //Trae los datos en formato JSON
        const options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post(
            this.apiURL + '/user/create',
            params,
            options
        ).pipe( res=> res );
    }

}