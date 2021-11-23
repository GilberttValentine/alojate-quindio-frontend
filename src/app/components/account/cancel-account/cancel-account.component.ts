import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user/user-service.service';
import { SweetAlertService } from 'src/app/utils/sweetAlert/sweet-alert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cancel-account',
  templateUrl: './cancel-account.component.html',
  styleUrls: ['./cancel-account.component.css']
})
export class CancelAccountComponent implements OnInit {

  constructor(private sweetAlertService: SweetAlertService, private userService: UserServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  cancelarCuenta() {
    Swal.fire({
      title: '¿Estas seguro que deseas Deshabilitar tu cuenta?',
      text: "Si deshabilitas tu cuenta no podras volver a acceder a esta a menos de que un administrador la vuelva a habilitar",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Deshabilitar Cuenta'
    }).then((result) => {
      if (result.isConfirmed) {
        const user_id = Number(localStorage.getItem('user'));
        this.userService.deactivateUser(user_id)
        .subscribe(res=>{
          this.sweetAlertService.successAlert('Cuenta deshabilitada', 'Adiós vaquero');
          this.router.navigate([`/sign-in`]);
        }, err =>{
          this.sweetAlertService.errorAlert('Error deshabilitando cuenta', err['error']['message']);
        })
      }
    })
  }

}
