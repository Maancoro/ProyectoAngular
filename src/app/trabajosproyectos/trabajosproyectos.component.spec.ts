import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrabajosproyectosComponent } from './trabajosproyectos.component';

describe('TrabajosproyectosComponent', () => {
  let component: TrabajosproyectosComponent;
  let fixture: ComponentFixture<TrabajosproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrabajosproyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrabajosproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
