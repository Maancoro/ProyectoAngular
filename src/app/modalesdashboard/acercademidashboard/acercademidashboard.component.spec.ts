import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercademidashboardComponent } from './acercademidashboard.component';

describe('AcercademidashboardComponent', () => {
  let component: AcercademidashboardComponent;
  let fixture: ComponentFixture<AcercademidashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercademidashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercademidashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
