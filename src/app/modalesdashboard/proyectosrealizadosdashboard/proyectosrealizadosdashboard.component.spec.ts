import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosrealizadosdashboardComponent } from './proyectosrealizadosdashboard.component';

describe('ProyectosrealizadosdashboardComponent', () => {
  let component: ProyectosrealizadosdashboardComponent;
  let fixture: ComponentFixture<ProyectosrealizadosdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectosrealizadosdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectosrealizadosdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
