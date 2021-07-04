import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineGridComponent } from './medicine-grid.component';

describe('MedicineGridComponent', () => {
  let component: MedicineGridComponent;
  let fixture: ComponentFixture<MedicineGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
