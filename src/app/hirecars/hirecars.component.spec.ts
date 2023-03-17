import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HirecarsComponent } from './hirecars.component';

describe('HirecarsComponent', () => {
  let component: HirecarsComponent;
  let fixture: ComponentFixture<HirecarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HirecarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HirecarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
