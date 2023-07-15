import { FormControl } from "@angular/forms";

export class DateFormControl extends FormControl{
    setValue(value: string, options: any) {
        console.log(value);
        super.setValue(value, options);
    }
}
