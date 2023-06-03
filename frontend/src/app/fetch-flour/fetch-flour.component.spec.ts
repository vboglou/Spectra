import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchFlourComponent } from './fetch-flour.component';

describe('FetchFlourComponent', () => {
  let component: FetchFlourComponent;
  let fixture: ComponentFixture<FetchFlourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FetchFlourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FetchFlourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
