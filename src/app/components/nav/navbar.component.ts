import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() changeNavbar!: boolean;
  @Input() nav!: string;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {}
}
