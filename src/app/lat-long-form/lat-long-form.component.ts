import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { TimezoneService } from '../services/timezone.service';

@Component({
  selector: 'app-lat-long-form',
  templateUrl: './lat-long-form.component.html',
  styleUrls: ['./lat-long-form.component.scss']
})
export class LatLongFormComponent implements OnInit {
  latLongForm: FormGroup;
  submitted: boolean = false;
  isLoading: boolean = false;
  errors: string = "";

  constructor(private formBuilder: FormBuilder, public timezoneService: TimezoneService) { }

  invalidLatitude() {
  	return (this.submitted && this.latLongForm.controls.lat.errors != null);
  }

  invalidLongitude() {
  	return (this.submitted && this.latLongForm.controls.long.errors != null);
  }

  ngOnInit(): void {
    this.latLongForm = this.formBuilder.group({
  		lat: ['', [Validators.required]],
  		long: ['', [Validators.required]],
  	});
  }

  async onSubmit() {
    this.submitted = true;
    this.errors = "";

    if(this.latLongForm.invalid) {
  		return;
  	} else {
      this.isLoading = true;
      let valid = await this.timezoneService
        .getFromLatLong(this.latLongForm.value.lat, this.latLongForm.value.long);

      if(!valid) {
        this.errors = "Please enter valid Latitude and Longitude.";
      }
      this.isLoading = false;
    }
  }
}
