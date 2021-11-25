import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Language } from 'src/app/models/language';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { userRoles } from 'src/app/utils/constants/userRoleConstants';
import { SweetAlertService } from 'src/app/utils/sweetAlert/sweet-alert.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  userForm!: FormGroup;
  user!: User;
  languages: Array<Language> = [];
  selectedLanguages: Array<string> = [];
  CLOUDINARY_PROFILE_URL = environment.CLOUDINARY_PROFILE_URL

  constructor(private fb: FormBuilder, private userService: UserServiceService, private sweetAlertService: SweetAlertService) { }

  ngOnInit(): void {
    this.createForm();
    this.getUser();
  }

  getUser() {
    this.sweetAlertService.waitAlert();
    const user_id = Number(localStorage.getItem('user'));

    this.userService.findUserById(user_id)
      .subscribe(res => {
        this.sweetAlertService.closeAlert()
        this.user = res;
        this.loadForm();
      }, (err) => {
        this.sweetAlertService.errorAlert('Ha ocurrido un error', err['error']['message']);
      });
  }

  createForm() {
    this.userForm = this.fb.group({
      user: this.fb.group({
        first_name: ['', Validators.required],
        second_name: [''],
        first_lastname: ['', Validators.required],
        second_lastname: [''],
        direction: ['', Validators.required],
        url_picture: [''],
        email: ['']
      }),
      guest: this.fb.group({
        stratum: ['', [Validators.required, this.nonZero]],
        civilStatusId: ['', [Validators.required]],
        studyLevelId: ['', Validators.required]
      }),
      host: this.fb.group({
        languages: [[], [this.minLanguages]]
      })
    })
  }

  loadForm() {
    const role = Number(localStorage.getItem('role'));

    const profileImg = document.getElementById('profileImg') as HTMLImageElement
    profileImg.src = `${environment.CLOUDINARY_PROFILE_URL}/${this.user.url_picture}`;

    this.loadUser();

    if (role === userRoles.HOST_ROLE_ID || role === userRoles.HOSTGUEST_ROLE_ID) {
      this.loadHost();
    }

    if (role === userRoles.GUEST_ROLE_ID || role === userRoles.HOSTGUEST_ROLE_ID) {
      this.loadGuest();
    }
  }

  loadUser() {
    this.userForm.get('user')!.setValue({
      first_name: this.user.first_name,
      second_name: this.user.second_name,
      first_lastname: this.user.first_lastname,
      second_lastname: this.user.second_lastname,
      url_picture: this.user.url_picture,
      direction: this.user.direction,
      email: this.user.email
    })
  }

  loadHost() {
    this.languages = this.user.languages;

    var languages: Array<number> = this.languages.map(l => {
      return l['id']
    })

    this.selectedLanguages = this.languages.map(l => {
      return Object(l)['name']
    })

    this.userForm.get('host')!.setValue({
      languages: languages
    })
  }

  loadGuest() {
    this.userForm.get('guest')!.setValue({
      stratum: this.user.stratum,
      civilStatusId: this.user.civil_status_id,
      studyLevelId: this.user.study_level_id
    })
  }

  nonZero(control: AbstractControl): { [key: string]: any } | null {
    if (Number(control.value) <= 0) {
      return { nonZero: true };
    } else {
      return null;
    }
  }

  minLanguages(control: AbstractControl): { [key: string]: any } | null {
    if (control.value.length < 1) {
      return { "minLanguages": true }
    } else {
      return null;
    }
  }
}
