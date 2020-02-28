import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LatLongFormComponent } from './lat-long-form.component';

describe('LatLongFormComponent', () => {
  let component: LatLongFormComponent;
  let fixture: ComponentFixture<LatLongFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatLongFormComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatLongFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
