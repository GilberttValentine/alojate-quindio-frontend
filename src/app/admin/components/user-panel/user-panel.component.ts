import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserPanelUtil } from 'src/app/admin/components/user-panel/utils/userPanelUtils'
import { User } from 'src/app/models/user';
import Swal from 'sweetalert2';
import { HostResponse } from '../../models/hostResponse';
import { FormPanelUtil } from './utils/formPanelUtils';
import { GuestFormPanelUtil } from './utils/guestFormUtils';
import { HostFormPanelUtil } from './utils/hostFormUtils';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  users!: User[]
  hosts!: User[]
  guests!: User[]
  userForm!: FormGroup;
  hostForm!: FormGroup;
  guestForm!: FormGroup;
  userType: string = 'user'
  userEditStatus: boolean = false
  hostEditStatus: boolean = false
  guestEditStatus: boolean = false

  constructor(private fb: FormBuilder, private userPanelUtil: UserPanelUtil, private formPanelUtil: FormPanelUtil, private guestFormPanelUtil: GuestFormPanelUtil, private hostFormPanelUtil: HostFormPanelUtil, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.users = await this.userPanelUtil.getUsers(this.users)
    this.hosts = await this.userPanelUtil.getHosts(this.hosts)
    this.guests = await this.userPanelUtil.getGuests(this.guests)
    this.createForm();
    if (this.userType === 'host') {
      this.hostFormPanelUtil.addNewLanguage((document.querySelector('.add-language') as HTMLButtonElement))
    }
  }

  async ngOnChanges() {
    this.users = await this.userPanelUtil.getUsers(this.users)
    this.hosts = await this.userPanelUtil.getHosts(this.hosts)
    this.guests = await this.userPanelUtil.getGuests(this.guests)
    this.createForm();
  }

  createForm() {
    this.userForm = this.formPanelUtil.setInitialUserFormGroup()
    this.hostForm = this.hostFormPanelUtil.setInitialHostFormGroup()
    this.guestForm = this.guestFormPanelUtil.setInitialGuestFormGroup()
  }

  async deleteUser(id: number) {
    await this.userPanelUtil.deactivateUser(id)
    this.ngOnChanges();
  }

  editHost(host: any) {
    this.hostEditStatus = true
    document.querySelectorAll('#admin_host_id_btn').forEach((it) => (it as HTMLButtonElement).disabled = true)
    this.hostFormPanelUtil.disableHostFormItems(this.hostForm)
    this.hostForm = this.fb.group({ user_id: [host.id, Validators.required] })
    this.hostFormPanelUtil.addLanguagesToHostForm((document.querySelector('.add-language') as HTMLButtonElement), host.languages)

    const clearBtn = this.formPanelUtil.setEditStatusForButtons((document.querySelector('#admin-host-btn') as HTMLButtonElement))
    clearBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.hostEditStatus = false;
      this.resetForm(clearBtn);
      (document.querySelector('#admin-host-btn') as HTMLButtonElement).innerText = 'Guardar';
      document.querySelectorAll('#admin_host_id_btn').forEach((it) => (it as HTMLButtonElement).disabled = false)
    });
  }

  editUser(user: User) {
    document.querySelectorAll('#admin_user_id_btn').forEach((it) => (it as HTMLButtonElement).disabled = true)
    this.userEditStatus = true
    this.formPanelUtil.disableUserFormItems(this.userForm)
    this.userForm = this.formPanelUtil.setEditableUserFormGroup(user)
    const clearBtn = this.formPanelUtil.setEditStatusForButtons((document.querySelector('#admin-user-btn') as HTMLButtonElement))
    clearBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.userEditStatus = false
      this.resetForm(clearBtn);
      (document.querySelector('#admin-user-btn') as HTMLButtonElement).innerText = 'Guardar';
      document.querySelectorAll('#admin_user_id_btn').forEach((it) => (it as HTMLButtonElement).disabled = false)
    });
  }

  editGuest(user: User) {
    document.querySelectorAll('#admin_guest_id_btn').forEach((it) => (it as HTMLButtonElement).disabled = true)
    this.guestEditStatus = true
    this.guestFormPanelUtil.disableGuestFormItems(this.guestForm)
    this.guestForm = this.guestFormPanelUtil.setEditableGuestFormGroup(user)
    const clearBtn = this.formPanelUtil.setEditStatusForButtons((document.querySelector('#admin-guest-btn') as HTMLButtonElement))
    clearBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.guestEditStatus = false
      this.resetForm(clearBtn);
      (document.querySelector('#admin-guest-btn') as HTMLButtonElement).innerText = 'Guardar';
      document.querySelectorAll('#admin_guest_id_btn').forEach((it) => (it as HTMLButtonElement).disabled = false)
    });
  }

  resetForm(button: HTMLButtonElement): void {
    const containerParent = (button.parentNode as HTMLDivElement);
    try {
      this.hostFormPanelUtil.enableHostFormItemsAndReset(this.hostForm)
      this.formPanelUtil.enableUserFormItemsAndReset(this.userForm)
      this.guestFormPanelUtil.enableGuestFormItemsAndReset(this.guestForm)
      this.hostForm = this.hostFormPanelUtil.setInitialHostFormGroup()
      this.userForm = this.formPanelUtil.setInitialUserFormGroup()
      this.guestForm = this.guestFormPanelUtil.setInitialGuestFormGroup()
      containerParent.children[1].remove()
      this.hostFormPanelUtil.resetLanguages();
    } catch (error) {
    }
  }

  setUserType(event: Event) {
    this.userType = (event.target as HTMLSelectElement).value
    this.ngOnChanges();
  }

  async submit() {
    try {
      if (this.userType === 'user') {
        if (this.userForm.valid) {

          const user: User = { ...this.userForm.value, actual_state: true, role_id: "1", direction: "" };
          Swal.fire({ allowOutsideClick: false, text: 'Espere un momento...', icon: 'info', confirmButtonText: 'Ok' });

          if (this.userEditStatus) await this.userPanelUtil.updateUser(this.userForm.get('id')?.value, user)
          else await this.userPanelUtil.createUser(user)
        }
      } else if (this.userType === 'host') {
        if (this.hostForm.valid) {
          const array: number[] = []
          document.querySelectorAll('#language_container').forEach(it => {
            const id = Number((it.children[1] as HTMLInputElement).value)
            array.push(id)
          })

          const body: HostResponse = { languagesId: array }
          Swal.fire({ allowOutsideClick: false, text: 'Espere un momento...', icon: 'info', confirmButtonText: 'Ok' });

          if (this.hostEditStatus) await this.userPanelUtil.updateHost(this.hostForm.get('user_id')?.value, body)
          else await this.userPanelUtil.createHost(this.hostForm.get('user_id')?.value, body)
        }
      } else {
        if (this.guestForm.valid) {
          const user: User = { ...this.guestForm.value };
          Swal.fire({ allowOutsideClick: false, text: 'Espere un momento...', icon: 'info', confirmButtonText: 'Ok' });

          if (this.guestEditStatus) await this.userPanelUtil.updateGuest(user.id, user)
          else await this.userPanelUtil.createGuest(user.id, user)
        }
      }
      Swal.showLoading();
      Swal.close();
      this.ngOnChanges();
      this.router.navigate([`/admin`]);

    } catch (err: any) {
      Swal.fire({ icon: 'error', title: 'Error en la creacion', text: err['error']['message'] || 'Hay campos vacios' })
      if (this.userType === 'host') {
        this.hostFormPanelUtil.addNewLanguage((document.querySelector('.add-language') as HTMLButtonElement))
      }
    }
    this.hostFormPanelUtil.resetLanguages();
    this.ngOnChanges();
    this.userEditStatus = false
    this.hostEditStatus = false
  }
}
