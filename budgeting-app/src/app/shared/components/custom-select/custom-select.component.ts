import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { SvgComponent } from '../../svg/svg.component';
import { AsyncPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { FormControl, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

export interface SelectOption {
  key: string;
  value: any;
}

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [SvgComponent, NgFor, NgIf, AsyncPipe, ReactiveFormsModule, NgClass],
  templateUrl: './custom-select.component.html',
  styleUrl: './custom-select.component.scss',
})
export class CustomSelectButtonComponent implements OnInit {

  @Input() controlName: string = '';
  @Input() public iconName: string = 'account'; 
  @Input() public title: string = '';
  @Input() public selectOptions: SelectOption[] = [];
  public selectedValue: string = '';
  public isOpen: boolean = false;

  @Output() selectionChange: EventEmitter<SelectOption> = new EventEmitter<SelectOption>();


  formControl: FormControl = new FormControl(null);

  constructor(
    private parent: FormGroupDirective,
    private eRef: ElementRef
  ){}

  ngOnInit(): void {
    this.formControl = this.parent.form.get(this.controlName) as FormControl;
    this.formControl.statusChanges.subscribe((_) => {});
  }

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