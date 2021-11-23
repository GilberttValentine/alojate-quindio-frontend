import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { SweetAlertService } from 'src/app/utils/sweetAlert/sweet-alert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-information',
  templateUrl: './user-information.component.html',
  styleUrls: ['./user-information.component.css']
})
export class UserInformationComponent implements OnInit {

  @Input('user') userForm: any;
  constructor(private userService: UserServiceService, private sweetAlertService: SweetAlertService) { }

  ngOnInit(): void {
  }

  submit() {
    const user_id = Number(localStorage.getItem('user'))

    if (this.userForm.valid) {
      this.sweetAlertService.waitAlert();

      Swal.showLoading();

      let user: User = {
        ...this.userForm.value
      }

      this.userService.updateUser(user_id, user)
        .subscribe(res => {
          this.sweetAlertService.successAlert('Actualizacion Exitosa','Tus datos han sido actualizados con exito')
        }, err => {
          this.sweetAlertService.errorAlert('Error actualizando el usuario', err['error']['message'])
        });
    }
  }

}
