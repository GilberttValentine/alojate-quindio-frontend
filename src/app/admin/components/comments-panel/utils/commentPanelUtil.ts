import { CommentServiceService } from 'src/app/services/comment/comment-service.service';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Injectable({
    providedIn: 'root'
})

export class CommentPanelUtil {
    constructor(private commentService: CommentServiceService, private fb: FormBuilder,) { }

    async findCommentsByLodging(lodgingId: number): Promise<object> {
        return await this.commentService.listCommentByLodgingNoPage(lodgingId).toPromise();
    }

    async deleteComment(userId: number, lodgingId: number, commentId: number): Promise<object> {
        return await this.commentService.deleteComment(userId, lodgingId, commentId).toPromise();
    }
}