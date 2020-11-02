import { AbstractControl } from "@angular/forms";
import { Key } from 'protractor';






export function FirstNameValidator(firstName: RegExp):any{
    return  (control: AbstractControl): {[key:string]:any} |null => {
          const firstname=firstName.test(control.value);
          return firstname ?{'firstName':{value:control.value }}: null;
  };
  }