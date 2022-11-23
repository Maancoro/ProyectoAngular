import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariocontactodashboardComponent } from './formulariocontactodashboard.component';

describe('FormulariocontactodashboardComponent', () => {
  let component: FormulariocontactodashboardComponent;
  let fixture: ComponentFixture<FormulariocontactodashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulariocontactodashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariocontactodashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
