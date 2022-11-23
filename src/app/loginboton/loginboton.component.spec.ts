import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginbotonComponent } from './loginboton.component';

describe('LoginbotonComponent', () => {
  let component: LoginbotonComponent;
  let fixture: ComponentFixture<LoginbotonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginbotonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginbotonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
