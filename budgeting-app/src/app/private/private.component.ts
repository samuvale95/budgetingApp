import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { NavMenuComponent } from "../shared/nav-menu/nav-menu.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-private',
    standalone: true,
    templateUrl: './private.component.html',
    styleUrl: './private.component.scss',
    imports: [HeaderComponent, NavMenuComponent, RouterOutlet]
})
export class PrivateComponent {

}
