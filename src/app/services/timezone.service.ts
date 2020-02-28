import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {
  public currentTimezone: any;
  private observer: any;

  constructor(private http: HttpClient) { }

  async getFromLatLong(lat, long) {
    const timezone = await new Promise<any>((resolve, reject) => {
      return this.http.request('POST', 'http://localhost:4000/api/v1/timezones', {
        body: {
          lat: lat,
          long: long,
        },
        responseType: 'json',
        observe: 'body',
        headers: {

        }
      }).subscribe(resolve as any, reject as any);
    });

    if(timezone.status == "FAILED") {
      return false;
    } else {
      this.currentTimezone = timezone;
      this.observer.next(this.currentTimezone);
      return true;
    }
  }

  public observeTimezone(): any {
    const timezoneObservable = new Observable(observer => {
      this.observer = observer;
      if(this.currentTimezone) {
        this.observer.next(this.currentTimezone);
      }
    });

    return timezoneObservable;
  }
}
