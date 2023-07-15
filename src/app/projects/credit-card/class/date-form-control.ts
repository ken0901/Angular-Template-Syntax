import { FormControl } from "@angular/forms";

export class DateFormControl extends FormControl{
    setValue(value: string, options: any) {
        if(value.match(/[^0-9|\/]/gi)){
            super.value(this.value, {...options, emitModelToViewChange: true});
            return;
        }

        if(value.length > 5) {
            super.value(this.value, {...options, emitModelToViewChange: true});
            return;
        }

        if(value.length === 2 && this.value.length === 3){
            super.value(value, {...options, emitModelToViewChange: true});
            return;
        }

        if(value.length === 2){
            super.setValue(value + '/', {...options, emitModelToViewChange: true});
        }
        super.setValue(value, options);
    }
}
