import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreExperimentComponent } from './store-experiment.component';

describe('StoreExperimentComponent', () => {
  let component: StoreExperimentComponent;
  let fixture: ComponentFixture<StoreExperimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreExperimentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreExperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
