import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretLearnMoreComponent } from './secret-learn-more.component';

describe('SecretLearnMoreComponent', () => {
  let component: SecretLearnMoreComponent;
  let fixture: ComponentFixture<SecretLearnMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecretLearnMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretLearnMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
