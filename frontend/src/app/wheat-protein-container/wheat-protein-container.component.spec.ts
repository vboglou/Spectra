import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheatProteinContainerComponent } from './wheat-protein-container.component';

describe('WheatProteinContainerComponent', () => {
  let component: WheatProteinContainerComponent;
  let fixture: ComponentFixture<WheatProteinContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheatProteinContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheatProteinContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
