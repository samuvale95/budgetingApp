import { Component, Input } from '@angular/core';
import { SvgComponent } from '../../svg/svg.component';
import { ControlContainer, FormControl, FormGroupDirective, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-switch',
  standalone: true,
  imports: [SvgComponent, ReactiveFormsModule],
  templateUrl: './custom-switch.component.html',
  styleUrl: './custom-switch.component.scss',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }],
})
export class CustomSwitchComponent {

  @Input() public iconName: string = '';
  @Input() public title: string = '';
  @Input() public controlName: string = '';

  public isChecked = false;
  
  toogle() {
    this.isChecked = !this.isChecked;
  }
}
