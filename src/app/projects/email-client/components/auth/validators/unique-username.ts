import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AbstractControl, AsyncValidator, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";

@Injectable({ providedIn:'root'})
export class UniqueUsername implements AsyncValidator {
    constructor(private http: HttpClient) {}

    validate(control: AbstractControl<any, any>): Promise<ValidationErrors> | Observable<ValidationErrors> {
        
        return null;
    }
}
