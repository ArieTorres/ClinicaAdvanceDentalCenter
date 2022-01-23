import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpSsComponent } from './pp-ss.component';

describe('PpSsComponent', () => {
  let component: PpSsComponent;
  let fixture: ComponentFixture<PpSsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PpSsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PpSsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
