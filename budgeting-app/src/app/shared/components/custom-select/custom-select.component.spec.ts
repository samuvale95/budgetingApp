import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomSelectButtonComponent } from './custom-select.component';

describe('CustomSelectButtonComponent', () => {
  let component: CustomSelectButtonComponent;
  let fixture: ComponentFixture<CustomSelectButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomSelectButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CustomSelectButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
