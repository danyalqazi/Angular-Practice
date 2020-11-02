import { AbstractControl } from "@angular/forms";
import { Key } from 'protractor';






export function emailValidator(Email: RegExp):any{
    return  (control: AbstractControl): {[key:string]:any} |null => {
          const email=Email.test(control.value);
          return email ?{'email':{value:control.value }}: null;
  };
  }