import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuproyectosdashboardComponent } from './menuproyectosdashboard.component';

describe('MenuproyectosdashboardComponent', () => {
  let component: MenuproyectosdashboardComponent;
  let fixture: ComponentFixture<MenuproyectosdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuproyectosdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuproyectosdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
