import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-edit-lodging',
  templateUrl: './create-edit-lodging.component.html',
  styleUrls: ['./create-edit-lodging.component.css']
})
export class CreateEditLodgingComponent implements OnInit {
  lodgingForm!: FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.lodgingForm = this.fb.group({
       lodging: this.fb.group({
        nightValue: ['', Validators.required],
        municipality: ['', Validators.required],
        lodgingType: ['', Validators.required],
        direction: ['', Validators.required],
        peopleAmount: ['', Validators.required],
        roomAmount: ['', Validators.required],
        bedAmount: ['', Validators.required],
        bathroomAmount: ['', Validators.required]
       }),
       title: this.fb.group({
         name: ['', Validators.required]
       }),
       about: this.fb.group({
         description: ['', Validators.required]
       }),
       service: this.fb.group({
         services: ['', Validators.required]
       }),
       accessibility: this.fb.group({
        accessibility: ['', Validators.required]
       }),
       images: this.fb.group({
         image1: ['', Validators.required],
         image2: ['', Validators.required],
         image3: ['', Validators.required],
         image4: ['', Validators.required],
         image5: ['', Validators.required]
       })
    })
  }

}
