import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { SvgComponent } from '../../svg/svg.component';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { ControlContainer, FormControl, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

export interface SelectOption {
  key: string;
  value: any;
}

@Component({
  selector: 'app-custom-select',
  standalone: true,
  imports: [SvgComponent, NgFor, NgIf, AsyncPipe, ReactiveFormsModule, NgClass],
  templateUrl: './custom-select.component.html',
  styleUrl: './custom-select.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
})
export class CustomSelectButtonComponent {

  @Input() controlName: string = '';
  @Input() public iconName: string = 'account'; 
  @Input() public title: string = '';
  @Input() public selectOptions: SelectOption[] = [];
  public selectedValue: string = '';
  public isOpen: boolean = false;

  @Output() selectionChange: EventEmitter<SelectOption> = new EventEmitter<SelectOption>();


  public formControl: FormControl = new FormControl(null);

  constructor(
    private eRef: ElementRef
  ){}

  selectValue(value: SelectOption) {
    this.selectedValue = value.value;
    this.formControl.setValue(value.key);
    this.selectionChange.emit(value);
    this.toogleSelect()
  }

  toogleSelect() {
    this.isOpen = !this.isOpen;
    if(!this.isOpen && !this.formControl.value){
      this.formControl.markAsTouched();
    }
  }

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
    }
  }
}