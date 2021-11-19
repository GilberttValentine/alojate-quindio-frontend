import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-language-chip',
  templateUrl: './language-chip.component.html',
  styleUrls: ['./language-chip.component.css']
})
export class LanguageChipComponent implements OnInit {

  @Input() idioma!: string;
  constructor() { }

  ngOnInit(): void {
    
  }

}
