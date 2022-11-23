import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalproyectosComponent } from './modalproyectos.component';

describe('ModalproyectosComponent', () => {
  let component: ModalproyectosComponent;
  let fixture: ComponentFixture<ModalproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalproyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
