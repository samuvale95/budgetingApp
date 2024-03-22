import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, Input, OnInit } from '@angular/core';
import { ControlContainer, FormControl, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepicker, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { SvgComponent } from '../../../shared/svg/svg.component';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-custom-datepicker',
  standalone: true,
  imports: [NgbDatepickerModule, SvgComponent, ReactiveFormsModule],
  templateUrl: './custom-datepicker.component.html',
  styleUrl: './custom-datepicker.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomDatepickerComponent implements OnInit {

  displayMonths = 1;
	navigation = 'select';
	showWeekNumbers = false;
	outsideDays = 'visible';

  @Input() public iconName: string = '';
  @Input() public title: string = '';
  @Input() public controlName: string = '';

  formControl: FormControl = new FormControl(null);

  constructor(
    private parent: FormGroupDirective,
    private cdr: ChangeDetectorRef,
    private dr: DestroyRef
  ){}

  ngOnInit(): void {
    this.formControl = this.parent.form.get(this.controlName) as FormControl;
    this.formControl.statusChanges.pipe(takeUntilDestroyed(this.dr)).subscribe((_) => this.cdr.markForCheck());
  }
}
