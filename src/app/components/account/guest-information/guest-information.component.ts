import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CivilStatus } from 'src/app/models/civilStatus';
import { StudyLevel } from 'src/app/models/studyLevel';
import { User } from 'src/app/models/user';
import { CivilStatusServiceService } from 'src/app/services/civilStatus/civil-status-service.service';
import { SecurityServiceService } from 'src/app/services/security/security-service.service';
import { StudyLevelServiceService } from 'src/app/services/studyLevel/study-level-service.service';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { userRoles } from 'src/app/utils/constants/userRoleConstants';
import { SweetAlertService } from 'src/app/utils/sweetAlert/sweet-alert.service';

@Component({
  selector: 'app-guest-information',
  templateUrl: './guest-information.component.html',
  styleUrls: ['./guest-information.component.css']
})
export class GuestInformationComponent implements OnInit {
  @Input('guestForm') guestForm!: any;

  studyLevels!: Array<StudyLevel>;
  civilStatus!: Array<CivilStatus>;

  constructor(private sweetAlertService: SweetAlertService, private civilStatusService: CivilStatusServiceService, private studyLevelService: StudyLevelServiceService, private userService: UserServiceService, private router: Router, private securityService: SecurityServiceService) { }

  ngOnInit(): void {
    this.loadSelects()
  }

  loadSelects() {
    this.sweetAlertService.waitAlert();
    this.civilStatusService.getAllCivilStatus()
      .subscribe(res => {
        this.studyLevelService.getAllStudyLevels()
          .subscribe(resp => {
            this.studyLevels = Object(resp)['message']

            this.sweetAlertService.closeAlert()
          }, (err) => {
            this.sweetAlertService.errorAlert("Error con el servidor", err['error']['message']);
          });
        this.civilStatus = Object(res)['message']

      }, (err) => {
        this.sweetAlertService.errorAlert("Error con el servidor", err['error']['message']);
      });
  }

  submit() {
    const user_id = Number(localStorage.getItem('user'))
    const role = Number(localStorage.getItem('role'))

    let user: User = {
      ...this.guestForm.value
    }

    this.sweetAlertService.waitAlert()
    if (this.guestForm.valid) {
      if (role === userRoles.GUEST_ROLE_ID || role === userRoles.HOSTGUEST_ROLE_ID) {
        this.updateGuest(user_id, user)
      } else {
        this.createGuest(user_id, user)
      }
    }
  }

  updateGuest(user_id: number, user: User) {
    this.userService.updateGuest(user_id, user)
      .subscribe(res => {
        this.sweetAlertService.successAlert('Actualización exitosa', 'Tus datos han sido actualizados con éxito')
      }, err => {
        this.sweetAlertService.errorAlert('Uups...ha ocurrido un error actualizando tu información', err['error']['message'])
      })
  }

  createGuest(user_id: number, user: User) {
    this.userService.createGuest(user_id, user)
      .subscribe(res => {
        this.sweetAlertService.successAlert('¡Felicidades ahora eres huésped!', 'Por motivos de seguridad, debes volver a iniciar sesión');
        this.securityService.logout();
        this.router.navigate([`/sign-in`]);
      }, err => {
        this.sweetAlertService.errorAlert('Uups...ha ocurrido un error al almacenar tus datos', err['error']['message']);
      })
  }
}
