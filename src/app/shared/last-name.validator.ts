import { AbstractControl } from "@angular/forms";
import { Key } from 'protractor';


export function LastNameValidator(lastName: RegExp):any{
    return  (control: AbstractControl): {[key:string]:any} |null => {
          const lastname=lastName.test(control.value);
          return lastname ?{'lastName':{value:control.value }}: null;
  };
  }