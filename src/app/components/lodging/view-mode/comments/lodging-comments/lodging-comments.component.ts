import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CommentServiceService } from 'src/app/services/comment/comment-service.service';

@Component({
  selector: 'app-lodging-comments',
  templateUrl: './lodging-comments.component.html',
  styleUrls: ['./lodging-comments.component.css']
})
export class LodgingCommentsComponent implements OnInit, OnChanges {
  @Input() context = "";
  @Input() commentsInfo = {} as any;

  lodgingName = "";
  lodgingRate = 0;
  totalComments = 0;
  limitNumber = 0;

  actualPage = 1;
  dropdownSelection = 0;
  totalPages = "";
  pagesAvailable: number[] = []
  commentsLodging: any[] = []

  disabledBack = false;
  disabledNext = false;

  constructor(private commentService: CommentServiceService) { }

  ngOnInit(): void { }

  ngOnChanges() {
    if (this.commentsInfo) {
      const lodgingId = this.commentsInfo.lodging_id;

      const { qualification, count, name } = this.commentsInfo;

      this.lodgingName = name;

      this.lodgingRate = Math.floor(qualification * 10) / 10;
      this.totalComments = count;

      this.limitNumber = count >= 1000 ? 1 : 0;

      this.getCommentsByLodgingId(lodgingId);
    }
  }

  async getCommentsByLodgingId(id: number) {
    let { results, total }: any = (await this.commentService.listCommentByLodging(id, this.actualPage - 1).toPromise());

    if (total <= 10) {
      this.deactivateNextButton();
    }

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
    this.disabledBack = true;
  }

  activateBackButton() {
    this.disabledBack = false;
  }

  deactivateNextButton() {
    this.disabledNext = true;
  }

  activateNextButton() {
    this.disabledNext = false;
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
