import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserServiceService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  ngAfterViewInit() {
    document.querySelector('body')!.classList.add('sign-up');
  }

  ngOnDestroy() {
    document.querySelector('body')!.classList.remove('sign-up');
  }

  createForm() {
    this.signUpForm = this.fb.group({
      first_name: ['', Validators.required],
      second_name: [''],
      first_lastname: ['', Validators.required],
      second_lastname: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  submit() {
    if (this.signUpForm.valid) {
      const user: User = {
        ...this.signUpForm.value,
        actual_state: true,
        url_picture: "GojoPfp.jpg",
        role_id: "1",
        direction: ""
      };
      
      Swal.fire({
        allowOutsideClick: false,
        text: 'Espere un momento...',
        icon: 'info',
        confirmButtonText: 'Ok',
      });

      Swal.showLoading();

      this.userService.createUser(user)
        .subscribe(resp => {
          Swal.close();
          
          this.router.navigate([`/sign-in`]);
        }, (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Error en el Registro',
            text: err['error']['message']
          })
        });
    }
  }
}
