import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiloTabComponent } from './silo-tab.component';

describe('SiloTabComponent', () => {
  let component: SiloTabComponent;
  let fixture: ComponentFixture<SiloTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiloTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiloTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
