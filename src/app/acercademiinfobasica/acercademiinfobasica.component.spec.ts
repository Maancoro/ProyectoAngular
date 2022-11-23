import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercademiinfobasicaComponent } from './acercademiinfobasica.component';

describe('AcercademiinfobasicaComponent', () => {
  let component: AcercademiinfobasicaComponent;
  let fixture: ComponentFixture<AcercademiinfobasicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercademiinfobasicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercademiinfobasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
