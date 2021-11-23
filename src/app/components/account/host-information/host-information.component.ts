import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Language } from 'src/app/models/language';
import { HostLanguageResponse } from 'src/app/models/response/hostLanguage';
import { User } from 'src/app/models/user';
import { LanguageServiceService } from 'src/app/services/language/language-service.service';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { userRoles } from 'src/app/utils/constants/userRoleConstants';
import { SweetAlertService } from 'src/app/utils/sweetAlert/sweet-alert.service';

@Component({
  selector: 'app-host-information',
  templateUrl: './host-information.component.html',
  styleUrls: ['./host-information.component.css']
})
export class HostInformationComponent implements OnInit {

  @Input('hostForm') hostForm!: any
  @Input() languages: Array<Language> = [];
  @Input() selectedLanguages: Array<string> = [];
  constructor(private sweetAlertService: SweetAlertService, private languageService: LanguageServiceService, private userService: UserServiceService, private router: Router) { }

  ngOnInit(): void {
    this.loadSelect();
    this.dragScroll();
  }

  loadSelect() {
    this.sweetAlertService.waitAlert();

    this.languageService.getAllLanguages()
      .subscribe(res => {
        this.languages = res

        this.sweetAlertService.closeAlert();
      }, (err) => {
        this.sweetAlertService.errorAlert('Error con el servidor', err['error']['message']);
      });
  }

  selectLanguage(evt: any) {
    const languageTemp = evt.target.value;

    const languageFind = this.languages.find(l => {
      return l.language_name === languageTemp
    })

    if (languageFind && !this.hostForm.get('languages').value.includes(languageFind.id)) {
      this.selectedLanguages.push(languageTemp);
      this.hostForm.get('languages').value.push(languageFind.id);
      console.log(this.hostForm.get('languages'))
    }

    this.hostForm.controls['languages'].updateValueAndValidity();
    const ele = document.getElementById('languages') as HTMLInputElement;
    ele.value = "";
  }

  submit() {
    const user_id = Number(localStorage.getItem('user'))
    const role = Number(localStorage.getItem('role'))

    const languages: HostLanguageResponse = {
      languagesId: this.hostForm.value['languages']
    }

    this.sweetAlertService.waitAlert()
    if (this.hostForm.valid) {
      if (role === userRoles.HOST_ROLE_ID || role === userRoles.HOSTGUEST_ROLE_ID) {
        this.updateHost(user_id, languages)
      } else {
        this.createHost(user_id, languages)
      }
    }
  }

  updateHost(user_id: number, languages: HostLanguageResponse) {
    this.userService.updateHost(user_id, languages)
      .subscribe(res => {
        this.sweetAlertService.successAlert('Actualizacion Exitosa', 'Tus datos han sido actualizados con exito')
      }, err => {
        this.sweetAlertService.errorAlert('Error actualizando el usuario', err['error']['message'])
      })
  }

  createHost(user_id: number, languages: HostLanguageResponse) {
    this.userService.createHost(user_id, languages)
    .subscribe(res => {
      this.sweetAlertService.successAlert('¡Felicidades ahora eres Anfitrión!', 'Por cuestiones de seguridad por favor vuelve a iniciar sesion')
      this.router.navigate([`/sign-in`]);
    }, err => {
      this.sweetAlertService.errorAlert('Error creando Anfitrión', err['error']['message'])
    })
  }

  dragScroll() {
    const ele = document.getElementById('languagesList');
    ele!.style.cursor = 'grab';

    let pos = { top: 0, left: 0, x: 0, y: 0 };

    const mouseDownHandler = function (e: any) {
      ele!.style.cursor = 'grabbing';
      ele!.style.userSelect = 'none';

      pos = {
        left: ele!.scrollLeft,
        top: ele!.scrollTop,
        // Get the current mouse position
        x: e.clientX,
        y: e.clientY,
      };

      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    };

    const mouseMoveHandler = function (e: any) {
      // How far the mouse has been moved
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      // Scroll the element
      ele!.scrollTop = pos.top - dy;
      ele!.scrollLeft = pos.left - dx;
    };

    const mouseUpHandler = function () {
      ele!.style.cursor = 'grab';
      ele!.style.removeProperty('user-select');

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    // Attach the handler
    ele!.addEventListener('mousedown', mouseDownHandler);
  }
}
