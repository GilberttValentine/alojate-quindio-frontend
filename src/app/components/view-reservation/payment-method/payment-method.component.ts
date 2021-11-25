import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {

  @Input() host = false;
  @Input() payment: any = {};
  
  paymentDetail = "";

  constructor() { }

  ngOnInit(): void {
    this.paymentDetail = this.host?"Se pagó el total el día que fue realizada la reserva":"Pagaste el total el día que realizaste la reserva";
  }

}
