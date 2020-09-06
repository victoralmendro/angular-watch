import { AbstractControl, ValidatorFn } from '@angular/forms';

export enum TimeType{
    HOURS, MINUTES, SECONDS
}

export function timeValidator(type: TimeType): ValidatorFn{   

    return (control: AbstractControl): {[key: string]: any} | null => {
        var time: number = null;
        var valid: boolean = true;

        time = parseInt(control.value);

        switch(type){
            case TimeType.HOURS:
                if(time < 0){
                    valid = false;
                }
                break;
            case TimeType.MINUTES:
                if(time < 0 || time > 59){
                    valid = false;
                }
                break;
            case TimeType.SECONDS:
                if(time < 0 || time > 59){
                    valid = false;
                }
                break;
            default:
                break;
        }  

        return valid ? null : {'timeValidator': {value: control.value}};        
    }

}