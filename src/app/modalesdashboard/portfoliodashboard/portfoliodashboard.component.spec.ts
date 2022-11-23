import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliodashboardComponent } from './portfoliodashboard.component';

describe('PortfoliodashboardComponent', () => {
  let component: PortfoliodashboardComponent;
  let fixture: ComponentFixture<PortfoliodashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfoliodashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfoliodashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
