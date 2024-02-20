import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnGetStartedComponent } from './on-get-started.component';

describe('OnGetStartedComponent', () => {
  let component: OnGetStartedComponent;
  let fixture: ComponentFixture<OnGetStartedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnGetStartedComponent]
    });
    fixture = TestBed.createComponent(OnGetStartedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
