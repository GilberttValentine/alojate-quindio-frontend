import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  @Output() currentForm = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(form: string) {
    switch (form) {
      case 'user':
        this.currentForm.emit('user');
        break;
      case 'lodging':
        this.currentForm.emit('lodging');
        break;
      case 'comments':
        this.currentForm.emit('comments');
        break;
    }
  }

  switchForm(form: string) {
    this.ngOnChanges(form)
  }
}
