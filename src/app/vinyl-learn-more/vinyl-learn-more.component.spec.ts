import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylLearnMoreComponent } from './vinyl-learn-more.component';

describe('VinylLearnMoreComponent', () => {
  let component: VinylLearnMoreComponent;
  let fixture: ComponentFixture<VinylLearnMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinylLearnMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylLearnMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
