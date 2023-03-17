import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellcarsComponent } from './sellcars.component';

describe('SellcarsComponent', () => {
  let component: SellcarsComponent;
  let fixture: ComponentFixture<SellcarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellcarsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
