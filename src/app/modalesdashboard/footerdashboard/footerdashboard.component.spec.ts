import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterdashboardComponent } from './footerdashboard.component';

describe('FooterdashboardComponent', () => {
  let component: FooterdashboardComponent;
  let fixture: ComponentFixture<FooterdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
