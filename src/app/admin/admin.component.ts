import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  currentForm!: string
  constructor() { }

  ngOnInit(): void {
  }

  setCurrentForm(e: any) {
    this.currentForm = e
  }
}
