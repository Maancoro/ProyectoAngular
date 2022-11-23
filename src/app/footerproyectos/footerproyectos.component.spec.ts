import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterproyectosComponent } from './footerproyectos.component';

describe('FooterproyectosComponent', () => {
  let component: FooterproyectosComponent;
  let fixture: ComponentFixture<FooterproyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterproyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterproyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
