import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobasicadashboardComponent } from './infobasicadashboard.component';

describe('InfobasicadashboardComponent', () => {
  let component: InfobasicadashboardComponent;
  let fixture: ComponentFixture<InfobasicadashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfobasicadashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfobasicadashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
