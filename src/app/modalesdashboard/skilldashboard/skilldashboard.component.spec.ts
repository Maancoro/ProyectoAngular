import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkilldashboardComponent } from './skilldashboard.component';

describe('SkilldashboardComponent', () => {
  let component: SkilldashboardComponent;
  let fixture: ComponentFixture<SkilldashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkilldashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkilldashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
