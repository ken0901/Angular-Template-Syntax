import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AsyncValidator, FormControl } from "@angular/forms";
import { of } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { AuthService } from "../../../services/auth/auth.service";

@Injectable({ providedIn:'root'})
export class UniqueUsername implements AsyncValidator {
    constructor(private http: HttpClient,
                private authService: AuthService) {}

    validate = (control: FormControl) => {
        const { value } = control;

        return this.authService.usernameAvailable(value).pipe(
            map((value) =>{
                if(value.available) // no nesscessary it is obvious available value.
                    return null;
            }),
            catchError(err => {
                if(err.error.username){
                    return of( { nonUniqueUsername: true });
                }else{
                    return of({ noConnection: true });
                }
            })
        );
    }
}
