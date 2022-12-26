import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VinylModifComponent } from './vinyl-modif.component';

describe('VinylModifComponent', () => {
  let component: VinylModifComponent;
  let fixture: ComponentFixture<VinylModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VinylModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VinylModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
