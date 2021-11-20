import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommentServiceService } from 'src/app/services/comment/comment-service.service';
import { CommentResponse } from 'src/app/models/response/commentResponse';

@Component({
  selector: 'app-lodging-comments',
  templateUrl: './lodging-comments.component.html',
  styleUrls: ['./lodging-comments.component.css']
})
export class LodgingCommentsComponent implements OnInit, OnChanges {

  @Input() nav!: string;
  @Input() commentsInfo = {} as CommentResponse;

  lodgingRate = 0;
  totalComments = 0;
  limitNumber = 0;

  actualPage = 1;
  dropdownSelection = 0;
  totalPages = "";
  pagesAvailable: number[] = []
  commentsLodging: any[] = []

  constructor(private commentService: CommentServiceService) { }

  ngOnInit(): void { }

  ngOnChanges() {
    if (this.commentsInfo) {
      const lodgingId = this.commentsInfo.lodging_id;

      const { qualification, count } = this.commentsInfo;

      this.lodgingRate = qualification;
      this.totalComments = count;

      this.limitNumber = count >= 1000 ? 1 : 0;

      this.getCommentsByLodgingId(lodgingId);
    }
  }

  async getCommentsByLodgingId(id: number) {
    let { results, total }: any = (await this.commentService.listCommentByLodging(id, this.actualPage - 1).toPromise());

    this.commentsLodging = results;

    total = Number(((total / 10) - 0.5).toFixed(0));
    total++;

    this.pagesAvailable = Array(total).fill(1).map((x, i) => i + 1)
    this.totalPages = total <= 9 ? `0${total}` : total;

    if (this.actualPage === 1) {
      this.deactivateBackButton();
    }
  }

  deactivateBackButton() {
    const back = (document.getElementById('back') as HTMLButtonElement);

    back!.disabled = true;
  }

  activateBackButton() {
    const back = (document.getElementById('back') as HTMLButtonElement);

    back!.disabled = false;
  }

  deactivateNextButton() {
    const next = (document.getElementById('next') as HTMLButtonElement);

    next!.disabled = true;
  }

  activateNextButton() {
    const next = (document.getElementById('next') as HTMLButtonElement);

    next!.disabled = false;
  }

  changePage(page: number) {
    this.actualPage = page;

    if (page === 1) this.deactivateBackButton();
    if (page > 1) this.activateBackButton();
    if (page === Number(this.totalPages)) this.deactivateNextButton();
    if (page < Number(this.totalPages)) this.activateNextButton();
    
    this.ngOnChanges();
  }

  back() {
    this.actualPage--;

    if (this.actualPage <= 1) this.deactivateBackButton();
    if (this.actualPage < Number(this.totalPages)) this.activateNextButton()

    this.ngOnChanges();
  }

  next() {
    this.actualPage++;

    if (this.actualPage > 1) this.activateBackButton()
    if (this.actualPage >= Number(this.totalPages)) this.deactivateNextButton()

    this.ngOnChanges();
  }
}
