import { AbstractControl } from "@angular/forms";
import { Key } from 'protractor';



//cross field validation


export function PasswordValidator(control: AbstractControl):{[Key:string]:boolean} | null{
    const password= control.get('password');
    const confirmPassword= control.get('confirmPassword');
    if(password.pristine ||confirmPassword.pristine){
        return null;
    }
    return password && confirmPassword && password.value != confirmPassword.value ?
    {'misMatch':true}:
    null;
}