import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainproyectosComponent } from './mainproyectos.component';

describe('MainproyectosComponent', () => {
  let component: MainproyectosComponent;
  let fixture: ComponentFixture<MainproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainproyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
