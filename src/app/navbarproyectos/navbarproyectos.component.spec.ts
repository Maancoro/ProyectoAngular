import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarproyectosComponent } from './navbarproyectos.component';

describe('NavbarproyectosComponent', () => {
  let component: NavbarproyectosComponent;
  let fixture: ComponentFixture<NavbarproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarproyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
