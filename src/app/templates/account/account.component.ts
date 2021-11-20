import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  userForm!: FormGroup;
  user!: User;

  constructor(private fb: FormBuilder, private userService: UserServiceService) { }

  ngOnInit(): void {
    this.createForm();

    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere un momento...',
      icon: 'info',
      confirmButtonText: 'Ok',
    });

    Swal.showLoading();
    const user_id = Number(localStorage.getItem('user'))
    this.userService.findUserById(user_id)
      .subscribe(res => {
        Swal.close();

        this.user = res;

        this.cargarForm()
      }, (err) => {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'Error en el Registro',
          text: err['error']['message']
        })
      });
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
        languages: ['', Validators.required]
      })
    })
  }

  cargarForm() {
    const role = localStorage.getItem('role');
    this.userForm.get('user')!.setValue({
      firstName: this.user.first_name,
      secondName: this.user.second_name,
      firstLastname: this.user.first_lastname,
      secondLastname: this.user.second_lastname,
      direction: this.user.direction,
      password: '',
      confirmPassword: '',
      urlPicture: this.user.url_picture
    })

    if(role !== '5' && role !== '3') {
      var languages = this.user.languages?.map( l =>{
        return Object(l)['id']
      })
      
      this.userForm.get('host')!.setValue({
        languages: languages
      })
    }

    if(role !== '5' && role !== '2') {
      this.userForm.get('guest')!.setValue({
        stratum: this.user.stratum,
        civilStatusId: this.user.civil_status_id,
        studyLevelId: this.user.study_level_id
      })
    }
  }

  nonZero(control: AbstractControl): { [key: string]: any } | null {
    if (Number(control.value) <= 0) {
      return { nonZero: true };
    } else {
      return null;
    }
  }

}
