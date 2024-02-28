import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { SvgComponent } from "../../shared/svg/svg.component";
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [MatDividerModule, SvgComponent, RouterOutlet, RouterLink]
})
export class LoginComponent {}
