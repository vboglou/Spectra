import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpectrumsComponent } from './spectrums.component';

describe('SpectrumsComponent', () => {
  let component: SpectrumsComponent;
  let fixture: ComponentFixture<SpectrumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpectrumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpectrumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
