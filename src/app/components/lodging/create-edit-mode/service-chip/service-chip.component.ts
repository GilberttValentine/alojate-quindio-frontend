import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-service-chip',
  templateUrl: './service-chip.component.html',
  styleUrls: ['./service-chip.component.css']
})
export class ServiceChipComponent implements OnInit {

  @Input() service!:string;
  @Output() deleteService: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  callParent() {
    this.deleteService.emit(this.service)
  }

}
