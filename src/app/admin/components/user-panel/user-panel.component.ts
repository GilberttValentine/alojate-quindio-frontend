import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserPanelUtil } from 'src/app/admin/components/user-panel/utils/userPanelUtils'
import { User } from 'src/app/models/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css']
})
export class UserPanelComponent implements OnInit {

  users!: User[]
  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private userPanelUtil: UserPanelUtil, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.users = Object.values((await this.userPanelUtil.findAllUsers()))[0]
    this.users = this.users.filter(it => it.actual_state)
    this.createForm();
  }

  async ngOnChanges() {
    this.users = Object.values((await this.userPanelUtil.findAllUsers()))[0]
    this.users = this.users.filter(it => it.actual_state)
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      first_name: ['', Validators.required],
      second_name: [''],
      first_lastname: ['', Validators.required],
      second_lastname: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  async deleteUser(id: number) {
    await this.userPanelUtil.deactivateUser(id)
    this.ngOnChanges();
  }

  submit() {
    if (this.userForm.valid) {
      const user: User = {
        ...this.userForm.value,
        actual_state: true,
        role_id: "1",
        direction: ""
      };

      Swal.fire({ allowOutsideClick: false, text: 'Espere un momento...', icon: 'info', confirmButtonText: 'Ok' });

      Swal.showLoading();

      this.userPanelUtil.createUser(user)
        .subscribe(() => {
          Swal.close();
          this.ngOnChanges();
          this.router.navigate([`/admin`]);
        }, (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Error en la creacion',
            text: err['error']['message']
          })
        });
    }
  }

}
