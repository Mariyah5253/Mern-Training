import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmanRathoreComponent } from './aman-rathore.component';

describe('AmanRathoreComponent', () => {
  let component: AmanRathoreComponent;
  let fixture: ComponentFixture<AmanRathoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmanRathoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmanRathoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
