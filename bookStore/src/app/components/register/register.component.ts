import { Component } from '@angular/core';
import { FormGroup, FormControl, ValidatorFn } from '@angular/forms';
import { User } from '../../shared/models/User.model';
import { BookStoreService } from '../../shared/services/book-store.service';
import { UserService } from '../../shared/services/user.service';
import { Router } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  //----------------PROPERTIRS-------------------
  formGroup: FormGroup;
  obj: typeof Object = Object;

  //----------------CONSTRUCTOR------------------
  constructor(public userService: UserService,
    public router: Router) {
    let formGroupConfig = {
      firstName: new FormControl("", this.createValidatorArr("firstName", 2, 15, /^[A-Za-z]+$/)),
      lastName: new FormControl("", this.createValidatorArr("lastName", 2, 15, /^[A-Za-z]+$/)),
      userPassword: new FormControl("", this.createValidatorArr("password", 5, 10)),
      userName: new FormControl("", this.createValidatorArr("userName", 3, 15, /^[A-Za-z]+$/)),
    };

    this.formGroup = new FormGroup(formGroupConfig);
  }

  //----------------METHODS-------------------
  submitRegister() {
    let person: User = this.formGroup.value;
    this.userService.registerUser(person);
    this.router.navigate(['/home']);
  }


  createValidatorArr(cntName: string, min: number, max: number, pattern?: RegExp): Array<ValidatorFn> {
    return [
      f => !f.value ? { "val": `${cntName} is required` } : null,
      f => f.value && pattern && !f.value.match(pattern) ? { "val": `${cntName} is contain only english letter` } : null,
      f => f.value && f.value.length > max ? { "val": `${cntName} is max ${max} chars` } : null,
      f => f.value && f.value.length < min ? { "val": `${cntName} is min ${min} chars` } : null
    ];
  }
  onFileChanged(event: any) {
    let files: any[];
    files = event.target.files;
    console.log(files[0].name);
}
}

