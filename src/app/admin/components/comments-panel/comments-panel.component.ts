import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CommentResponse } from 'src/app/models/response/commentResponse';
import { CommentPanelUtil } from './utils/commentPanelUtil';

@Component({
  selector: 'app-comments-panel',
  templateUrl: './comments-panel.component.html',
  styleUrls: ['./comments-panel.component.css']
})
export class CommentsPanelComponent implements OnInit {

  commentsForm!: FormGroup
  comments!: CommentResponse[]
  constructor(private fb: FormBuilder, private commentPanelUtil: CommentPanelUtil) { }

  ngOnInit(): void {
    this.createForm()
  }

  ngOnChanges() {
    this.comments = [];
    (document.querySelector('#comment_table') as HTMLTableElement).hidden = true;
  }

  createForm() {
    this.commentsForm = this.fb.group({
      lodgingId: ['', Validators.required]
    })
  }
  async findCommentByLodging() {
    if (this.commentsForm.valid) {
      const comments = Object.values(
        await this.commentPanelUtil.findCommentsByLodging(this.commentsForm.get('lodgingId')?.value))[0]
      this.comments = comments;
      if (comments.length > 0) {
        (document.querySelector('#comment_table') as HTMLTableElement).hidden = false
      }
    }
    this.commentsForm.reset();
  }

  async deleteComment(userId: number, lodgingId: number, commentId: number) {
    await this.commentPanelUtil.deleteComment(userId, lodgingId, commentId)
    this.ngOnChanges()
  }
}
