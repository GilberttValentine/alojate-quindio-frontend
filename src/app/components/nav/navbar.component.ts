import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
  @Input() context!: string;
  @Input() nav!: string;
  @Input() user = {} as any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    console.log(this.context);
    console.log(this.user);
  }
}
