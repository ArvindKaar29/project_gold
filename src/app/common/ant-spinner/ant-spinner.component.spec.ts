import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntSpinnerComponent } from './ant-spinner.component';

describe('AntSpinnerComponent', () => {
  let component: AntSpinnerComponent;
  let fixture: ComponentFixture<AntSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntSpinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AntSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
