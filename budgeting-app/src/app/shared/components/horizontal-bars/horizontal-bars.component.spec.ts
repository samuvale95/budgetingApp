import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalBarsComponent } from './horizontal-bars.component';

describe('HorizontalBarsComponent', () => {
  let component: HorizontalBarsComponent;
  let fixture: ComponentFixture<HorizontalBarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalBarsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HorizontalBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
