import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LatLongFormComponent } from './lat-long-form/lat-long-form.component';
import { TimezoneDisplayComponent } from './timezone-display/timezone-display.component';

@NgModule({
  declarations: [
    AppComponent,
    LatLongFormComponent,
    TimezoneDisplayComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
