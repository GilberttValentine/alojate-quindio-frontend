import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Language } from 'src/app/models/language';
import { LanguageServiceService } from 'src/app/services/language/language-service.service';

@Component({
  selector: 'app-lodging-owner',
  templateUrl: './lodging-owner.component.html',
  styleUrls: ['./lodging-owner.component.css']
})
export class LodgingOwnerComponent implements OnInit, OnChanges {

  @Input() nav!: string;
  @Input() ownerInfo: any;

  name = "";
  createdAt = "";
  languages = "";
  photo = "";

  constructor(private languageService: LanguageServiceService) { }

  ngOnInit(): void { }

  async ngOnChanges(): Promise<void> {
    if (this.ownerInfo) {
      const { name, created_at, languages, photo } = this.ownerInfo;
      //this.photo = photo;

      this.photo = "https://media.discordapp.net/attachments/574438784611909645/909205401084510218/182325284_1161200667626223_5999048449218695878_n.jpg?width=580&height=580";
      this.name = name;

      const date = new Date(created_at);
      const day = date.getDate();
      const year = date.getFullYear();
      const month = date.getMonth();

      const months = new Array("enero", "febrero", "marzo",
        "abril", "mayo", "junio", "julio", "agosto", "septiembre",
        "octubre", "noviembre", "diciembre");

      this.createdAt = `Se registró en ${day} ${months[month]} de ${year}`;

      const ownerLanguages = await this.getOwnerLanguages(languages.map((it: Language) => it.id));

      ownerLanguages.forEach((it, i) => {
        if (i == ownerLanguages.length - 1) {
          this.languages += `${it.language_name.charAt(0).toUpperCase() + it.language_name.slice(1)}`
        } else {
          this.languages += `${it.language_name.charAt(0).toUpperCase() + it.language_name.slice(1)}, `
        }
      })
    }
  }

  async getOwnerLanguages(ids: object) {
    return await (this.languageService.getLanguagesByIds(ids).toPromise());
  }

}
