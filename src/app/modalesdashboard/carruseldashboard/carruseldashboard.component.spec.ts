import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruseldashboardComponent } from './carruseldashboard.component';

describe('CarruseldashboardComponent', () => {
  let component: CarruseldashboardComponent;
  let fixture: ComponentFixture<CarruseldashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarruseldashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruseldashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
