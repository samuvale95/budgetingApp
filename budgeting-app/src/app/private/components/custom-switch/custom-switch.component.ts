import { ChangeDetectorRef, Component, DestroyRef, Input } from '@angular/core';
import { SvgComponent } from '../../../shared/svg/svg.component';
import { FormControl, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-custom-switch',
  standalone: true,
  imports: [SvgComponent, ReactiveFormsModule],
  templateUrl: './custom-switch.component.html',
  styleUrl: './custom-switch.component.scss'
})
export class CustomSwitchComponent {

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
