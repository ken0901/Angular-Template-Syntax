import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AsyncValidator, FormControl } from "@angular/forms";
import { of } from "rxjs";
import { catchError, map } from "rxjs/operators";

@Injectable({ providedIn:'root'})
export class UniqueUsername implements AsyncValidator {
    constructor(private http: HttpClient) {}

    validate = (control: FormControl) => {
        const { value } = control;

        return this.http.post<any>('https://api.angular-email.com/auth/username', {
            username: value
        }).pipe(
            map((value) =>{
                if(value.available) // no nesscessary it is obvious available value.
                    return null;
            }),
            catchError(err => {
                console.log(err);
                console.log(err.error.username);
                if(err.error.username){
                    return of( { nonUniqueUsername: true });
                }else{
                    return of({ noConnection: true });
                }
            })
        );
    }
}
