import { Component } from '@angular/core';
import { SvgComponent } from "../svg/svg.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [SvgComponent]
})
export class HeaderComponent {

}
