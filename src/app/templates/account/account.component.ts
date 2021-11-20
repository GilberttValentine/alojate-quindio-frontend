import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  userForm!: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
       user: this.fb.group({
         firstName: ['', Validators.required],
         secondName: [''],
         firstLastname: ['', Validators.required],
         secondLastname: [''],
         direction: ['', Validators.required],
         password: ['', Validators.required],
         confirmPassword: ['', Validators.required],
         urlPicture: [''],
       }),
       guest: this.fb.group({
         stratum: ['', [Validators.required, this.nonZero]],
         civilStatusId: ['', [Validators.required]],
         studyLevelId: ['', Validators.required]
       }),
       host: this.fb.group({
         languages: ['',Validators.required]
       })
    })
  }

  nonZero(control:AbstractControl):{ [key: string]: any} | null {
    if (Number(control.value) <= 0) {
      return {nonZero: true};
    } else {
      return null;
    }
  }

}
