import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurespinnerComponent } from './purespinner.component';

describe('PurespinnerComponent', () => {
  let component: PurespinnerComponent;
  let fixture: ComponentFixture<PurespinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurespinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurespinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
