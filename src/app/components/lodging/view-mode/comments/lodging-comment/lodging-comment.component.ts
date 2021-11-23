import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-lodging-comment',
  templateUrl: './lodging-comment.component.html',
  styleUrls: ['./lodging-comment.component.css']
})
export class LodgingCommentComponent implements OnInit, OnChanges {
  @Input() comment: any;
  name = "";
  createdAt = "";
  description = "";
  total = 0;
  user_photo = "";

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    if (this.comment) {
      this.name = this.comment.guest.name;
      this.user_photo = `${environment.CLOUDINARY_PROFILE_URL}/${this.comment.guest.photo}`;
      //this.user_photo = "https://media.discordapp.net/attachments/574438784611909645/909205401084510218/182325284_1161200667626223_5999048449218695878_n.jpg?width=580&height=580"
      this.description = this.comment.description;

      const date = new Date(this.comment.created_at);
      const year = date.getFullYear();
      const month = date.getMonth();

      const months = new Array("enero", "febrero", "marzo",
        "abril", "mayo", "junio", "julio", "agosto", "septiembre",
        "octubre", "noviembre", "diciembre");

      this.createdAt = `${months[month]} de ${year}`;

      const total = (this.comment.quality + this.comment.cleaning + this.comment.veracity + this.comment.ubication) / 4;

      this.total = Math.floor(total * 10) / 10;
    }
  }
}
