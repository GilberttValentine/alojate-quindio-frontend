import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/models/comment';
import { CommentServiceService } from 'src/app/services/comment/comment-service.service';
import { SweetAlertService } from 'src/app/utils/sweetAlert/sweet-alert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit, OnChanges {
  
  @Input() lodgingName = "";
  reviewForm!: FormGroup;
  lodgingId: number;

  constructor(private fb:FormBuilder, private sweetAlertServices: SweetAlertService, private commentService: CommentServiceService, private route: ActivatedRoute) { 
    this.lodgingId = Number(this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.createForm()
  }

  ngOnChanges(): void {
    
  }

  setValue(event: any) {
    const value = event.target.value;
    const id = event.target.id;

    const element = document.getElementById(`${id}-value`);
    element!.innerText = value == 1 || value == 2 || value == 3 || value == 4 || value == 5 ? `${value}.0` : value;
  }

  createForm(){
    this.reviewForm = this.fb.group({
      description: ['', Validators.required],
      quality: [1, Validators.required],
      veracity: [1, Validators.required],
      cleaning: [1, Validators.required],
      ubication: [1, Validators.required]
    })
  }

  submit() {
    if(this.reviewForm.valid) {
      const user_id:number = Number(localStorage.getItem('user'));

      const comment: Comment = {
        ...this.reviewForm.value
      }

      this.sweetAlertServices.waitAlert()

      this.commentService.createComment(user_id, this.lodgingId, comment)
      .subscribe(res => {
          Swal.fire(
            'Reseña realizada',
            'La reseña se ha realizado con exito',
            'success'
          ).then( resp => {
            window.location.reload();
          })
      }, err=> {
        this.sweetAlertServices.errorAlert('Error realizando el comentario', err['error']['message'])
      })
    }
  }
}
