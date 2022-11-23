import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudashboardComponent } from './menudashboard.component';

describe('MenudashboardComponent', () => {
  let component: MenudashboardComponent;
  let fixture: ComponentFixture<MenudashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenudashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenudashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
