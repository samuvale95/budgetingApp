import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleBarComponent } from './circle-bar.component';

describe('CircleBarComponent', () => {
  let component: CircleBarComponent;
  let fixture: ComponentFixture<CircleBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CircleBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CircleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
