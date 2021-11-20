import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SecurityServiceService } from 'src/app/services/security/security-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm!: FormGroup;
  constructor(private fb:FormBuilder, private securityService: SecurityServiceService, private router: Router) { }

  ngOnInit(): void {
    this.createForm()
  }

  ngAfterViewInit() {
    document.querySelector('body')!.classList.add('sign-in');
  }

  ngOnDestroy() {
    document.querySelector('body')!.classList.remove('sign-in');
  }

  createForm() {
    this.signInForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  submit() {
    if (this.signInForm.valid) {
      const user = { 
        ...this.signInForm.value
      }

      Swal.fire({
        allowOutsideClick: false,
        text: 'Espere un momento...',
        icon: 'info',
        confirmButtonText: 'Ok',
      });

      Swal.showLoading();

      this.securityService.login(user)
      .subscribe(resp => {
        Swal.close();
        
        this.securityService.validateToken(resp)
        .subscribe(res=>{
          localStorage.setItem('token', Object(resp)["token"]);
          localStorage.setItem('user', Object(res)["id"]);
          localStorage.setItem('role', Object(res)["role"]);
          this.router.navigate([`/home`]);
        })
      }, (err) => {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Error en el Registro',
          text: err['error']['message']
        })
      });
    }
  }
}
