import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomHomeComponent } from './bom-home.component';

describe('BomHomeComponent', () => {
  let component: BomHomeComponent;
  let fixture: ComponentFixture<BomHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BomHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BomHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
