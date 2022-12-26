import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylNewComponent } from './vinyl-new.component';

describe('VinylNewComponent', () => {
  let component: VinylNewComponent;
  let fixture: ComponentFixture<VinylNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinylNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
