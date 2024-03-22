import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SvgComponent } from '../../../shared/svg/svg.component';
import { NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle } from '@ng-bootstrap/ng-bootstrap';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ControlContainer, FormControl, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

interface SelectOption {
  key: string;
  value: any;
}

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [SvgComponent, NgbDropdown, NgbDropdownToggle, NgbDropdownItem, NgbDropdownMenu, NgFor, NgIf, AsyncPipe, ReactiveFormsModule],
  templateUrl: './custom-select.component.html',
  styleUrl: './custom-select.component.scss',
  viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomSelectButtonComponent implements OnInit {

  @Input() controlName: string = '';
  @Input() public iconName?: string;
  @Input() public title: string = '';
  @Input() public selectOptions: SelectOption[] = [];
  public selectedValue: string = '';

  @Output() selectionChange: EventEmitter<SelectOption> = new EventEmitter<SelectOption>();


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

  selectValue(value: SelectOption) {
    this.selectedValue = value.value;
    this.formControl.setValue(value.key);
  }

}