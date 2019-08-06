import { Component, OnInit } from '@angular/core';
import {AssetsService } from '../services/assets.service';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';


export function ValidatePasswords(control: AbstractControl) {
  if (control.value === '') {
    return { validUrl: true };
  }
  return null;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide = true;
  isNewMember = false;
  isWriting = false;
  

  // Spinner settings
  color = 'primary';
  mode = 'indeterminate';
  value = 50;
  displayProgressSpinner = false;

  /*-- Using this form group to reset controls after submit --*/
  registerFormGroup: FormGroup;

  /*-- All controls used in form --*/
  nameControl = new FormControl('', Validators.required);
  lastNameControl = new FormControl('', Validators.required);
  idControl = new FormControl('', Validators.required);
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  
  constructor(private router: Router, private _formBuilder: FormBuilder, private assetsService: AssetsService) { }

  ngOnInit() {
    this.registerFormGroup = this._formBuilder.group({
      name: this.nameControl,
      lastName: this.lastNameControl,
      id: this.idControl,
      email: this.emailControl
    });
  }

  //login is going to call the API (initialize)
  login() {
   
    this.router.navigate(['/home']);
    this.assetsService.initialize().subscribe(
      response => {
      console.log(response)
      }
    )
    


  }

  register() {
    const data = {
      name: this.nameControl.value,
      lastName: this.lastNameControl.value,
      email: this.emailControl.value,
      id: this.idControl.value
    };
    this.displayProgressSpinner = true;
    setTimeout(() => {
      this.displayProgressSpinner = false;
      console.log('User data:', data);
      this.registerFormGroup.reset();
      this.goBack();
    }, 3000);
  }

  openSignUp() {
    this.isNewMember = true;
  }

  goBack() {
    this.isNewMember = false;
    this.registerFormGroup.reset();
  }

 

  getEmailErrorMessage() {
    return this.emailControl.hasError('required') ? 'Porfavor ingresa un correo' :
      this.emailControl.hasError('email') ? 'Email invalido' :
 
        '';
  }


  start(){
    this.assetsService.initialize().subscribe(
      response => {
      console.log(response)
      }
    )
 
   }

}

