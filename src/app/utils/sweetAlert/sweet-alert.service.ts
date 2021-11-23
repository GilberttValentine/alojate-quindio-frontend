import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  waitAlert() {
    Swal.fire({
      allowOutsideClick: false,
      text: 'Espere un momento...',
      icon: 'info',
    });
    Swal.showLoading();
  }

  successAlert(title:string, message:string) {
    Swal.fire({
      title: title,
      text: message,
      icon: 'success',
      confirmButtonText: 'Aceptar'
    })
  }

  notificationAlert(title: string, message: string) {
    Swal.fire({
      title: title,
      text: message,
      icon: 'warning',
      confirmButtonText: 'Aceptar'
    })
  }

  errorAlert(title:string, message: string) {
    Swal.fire({
      icon: 'error',
      title: title,
      text: message,
      confirmButtonText: 'Aceptar'
    })
  }

  closeAlert() {
    Swal.close();
  }
}
