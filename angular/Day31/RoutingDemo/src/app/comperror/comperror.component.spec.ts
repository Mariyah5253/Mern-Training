import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComperrorComponent } from './comperror.component';

describe('ComperrorComponent', () => {
  let component: ComperrorComponent;
  let fixture: ComponentFixture<ComperrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComperrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComperrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
