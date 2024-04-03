import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepicker, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { SvgComponent } from '../../svg/svg.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-custom-datepicker',
  standalone: true,
  imports: [NgbDatepickerModule, SvgComponent, ReactiveFormsModule],
  templateUrl: './custom-datepicker.component.html',
  styleUrl: './custom-datepicker.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
})
export class CustomDatepickerComponent {

  displayMonths = 1;
	navigation = 'select';
	showWeekNumbers = false;
	outsideDays = 'visible';

  @Input() public iconName: string = '';
  @Input() public title: string = '';
  @Input() public controlName: string = '';

}
