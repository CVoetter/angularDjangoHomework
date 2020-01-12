import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelterFormComponent } from './shelter-form.component';

describe('ShelterFormComponent', () => {
  let component: ShelterFormComponent;
  let fixture: ComponentFixture<ShelterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
