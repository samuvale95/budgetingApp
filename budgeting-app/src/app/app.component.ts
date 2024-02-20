import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMenuComponent } from "../shared/nav-menu/nav-menu.component";
import { HeaderComponent } from "../shared/header/header.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, NavMenuComponent, HeaderComponent]
})
export class AppComponent {
  title = 'budgeting-app';
}
