import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfildashboardComponent } from './perfildashboard.component';

describe('PerfildashboardComponent', () => {
  let component: PerfildashboardComponent;
  let fixture: ComponentFixture<PerfildashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfildashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfildashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
