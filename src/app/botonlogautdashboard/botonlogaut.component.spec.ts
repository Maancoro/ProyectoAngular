import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonlogautComponent } from './botonlogaut.component';

describe('BotonlogautComponent', () => {
  let component: BotonlogautComponent;
  let fixture: ComponentFixture<BotonlogautComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonlogautComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonlogautComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
