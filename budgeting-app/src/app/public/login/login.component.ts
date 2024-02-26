import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { SvgComponent } from "../../shared/svg/svg.component";

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [MatDividerModule, SvgComponent]
})
export class LoginComponent {

}
