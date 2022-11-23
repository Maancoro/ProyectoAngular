import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludoproyectosdashboardComponent } from './saludoproyectosdashboard.component';

describe('SaludoproyectosdashboardComponent', () => {
  let component: SaludoproyectosdashboardComponent;
  let fixture: ComponentFixture<SaludoproyectosdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaludoproyectosdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaludoproyectosdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
