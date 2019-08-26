import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RegistrationService } from '../../services/registration/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
	userForm: FormGroup;
	displayMsg: string;
  constructor(private fb: FormBuilder, private regService: RegistrationService) { }

  ngOnInit() {
  	this.userForm = this.fb.group({
  		name: [, Validators.required],
  		gender: [, Validators.required],
  		email: [, [Validators.required, Validators.email]],
  		mobile: [, Validators.required],
  		password: [, Validators.required],
  		rePassword: [, Validators.required],
  		image: [, Validators.required],
  		address: [, Validators.required],

  	})
  }

  onImageChange(event) {
  	if(event.target.files && event.target.files.length > 0) {
  		const file = event.target.files[0];
  		this.setImage = file;
  	}
  }

  toFormObj(data) {
    debugger;
  	const formData = new FormData();

  	Object.keys(data).forEach((key) => {
  		formData.append(key, data[key]);
  	});

  	return formData;
  }

  save() {
  	if(this.userForm.valid) {
  		let data = this.toFormObj(this.userForm.value);
      this.regService.save(data)
      .subscribe(
        (data) => {
          debugger;
        },
        (err) => {
          debugger;
        }
      )
  	} else {
  		this.displayMsg = 'Please enter valid value';
  	}
  }

  get getName() {
  	return this.userForm.get('name');
  }

  get getGender() {
  	return this.userForm.get('gender');
  }

  get getEmail() {
  	return this.userForm.get('email');
  }

  get getMobile() {
  	return this.userForm.get('mobile');
  }

  get getPassword() {
  	return this.userForm.get('password');
  }

  get getRePassword() {
  	return this.userForm.get('rePassword');
  }

  get getImage() {
  	return this.userForm.get('image');
  }

  set setImage(value) {
  	this.getImage.setValue(value);
  }

  get getAddress() {
  	return this.userForm.get('address');
  }
}
