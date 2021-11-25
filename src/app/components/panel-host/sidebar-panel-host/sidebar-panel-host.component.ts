import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-panel-host',
  templateUrl: './sidebar-panel-host.component.html',
  styleUrls: ['./sidebar-panel-host.component.css']
})
export class SidebarPanelHostComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goLodgings() {
    this.router.navigate(['host/lodgings']).then(() => {
      window.location.reload();
    });
  }
}
