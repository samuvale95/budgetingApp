import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleBarsContainerComponent } from './circle-bars-container.component';

describe('CircleBarsContainerComponent', () => {
  let component: CircleBarsContainerComponent;
  let fixture: ComponentFixture<CircleBarsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircleBarsContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CircleBarsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
