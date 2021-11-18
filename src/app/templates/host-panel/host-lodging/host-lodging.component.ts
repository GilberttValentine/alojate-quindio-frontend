import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router/router.service';

@Component({
  selector: 'app-host-lodging',
  templateUrl: './host-lodging.component.html',
  styleUrls: ['./host-lodging.component.css']
})
export class HostLodgingComponent implements OnInit {

  nav: string = "panel-host";

  constructor(private routerService: RouterService) { }

  ngOnInit(): void {
  }
}
