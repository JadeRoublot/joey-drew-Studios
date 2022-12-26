import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieLearnMoreComponent } from './movie-learn-more.component';

describe('MovieLearnMoreComponent', () => {
  let component: MovieLearnMoreComponent;
  let fixture: ComponentFixture<MovieLearnMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieLearnMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieLearnMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
