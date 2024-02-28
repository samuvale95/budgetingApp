import { Component } from '@angular/core';
import { SvgComponent } from "../../shared/svg/svg.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-registration',
    standalone: true,
    templateUrl: './registration.component.html',
    styleUrl: './registration.component.scss',
    imports: [SvgComponent, RouterOutlet, RouterLink, RouterLinkActive]
})
export class RegistrationComponent {

}
