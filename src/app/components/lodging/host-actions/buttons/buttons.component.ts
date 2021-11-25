import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LodgingServiceService } from 'src/app/services/lodging/lodging-service.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {
  @Input() state = false;
  @Input() lodgingId = 0;

  constructor(private router: Router, private lodgingService: LodgingServiceService) { }

  ngOnInit(): void {
  }

  goEditionMode() {
    this.router.navigate([`/host/lodgings/${this.lodgingId}/edit`]);
  }

  activate() {
    const userId = Number(localStorage.getItem('user'));
    this.lodgingService.activateLodging(userId, this.lodgingId).subscribe(() => {
      window.location.reload();
    });
  }

  deactivate() {
    const userId = Number(localStorage.getItem('user'));
    this.lodgingService.deactivateLodging(userId, this.lodgingId).subscribe(() => {
      window.location.reload();
    });
  }
}
