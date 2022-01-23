import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlianzaUserComponent } from './alianza-user.component';

describe('AlianzaUserComponent', () => {
  let component: AlianzaUserComponent;
  let fixture: ComponentFixture<AlianzaUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlianzaUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlianzaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
