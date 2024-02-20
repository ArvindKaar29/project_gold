import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxMockComponent } from './ngrx-mock.component';

describe('NgrxMockComponent', () => {
  let component: NgrxMockComponent;
  let fixture: ComponentFixture<NgrxMockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxMockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
