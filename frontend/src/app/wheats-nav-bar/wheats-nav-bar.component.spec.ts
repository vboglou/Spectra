import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheatsNavBarComponent } from './wheats-nav-bar.component';

describe('WheatsNavBarComponent', () => {
  let component: WheatsNavBarComponent;
  let fixture: ComponentFixture<WheatsNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheatsNavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheatsNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
