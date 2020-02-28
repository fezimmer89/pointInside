import { Component, OnInit } from '@angular/core';
import { TimezoneService } from '../services/timezone.service';

@Component({
  selector: 'app-timezone-display',
  templateUrl: './timezone-display.component.html',
  styleUrls: ['./timezone-display.component.scss']
})
export class TimezoneDisplayComponent implements OnInit {
  timezone: any;

  constructor(public timezoneService: TimezoneService) { }

  ngOnInit(): void {
    const timezoneObservable = this.timezoneService.observeTimezone();
    timezoneObservable.subscribe((timezone: any) => {
        this.timezone = timezone;
    });
  }

  check() {
    this.timezone = this.timezoneService.currentTimezone;
  }
}
