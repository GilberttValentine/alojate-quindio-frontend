import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-frm-reservation',
  templateUrl: './frm-reservation.component.html',
  styleUrls: ['./frm-reservation.component.css']
})
export class FrmReservationComponent implements OnInit {

  reservationForm!: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.reservationForm = this.fb.group({
      cardNumber: ['',[Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      expDate: ['', Validators.required],
      securityCode: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    })
  }

}
