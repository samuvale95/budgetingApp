import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { publicRoutes } from './public.routes';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss'
})
export class PublicComponent {
  constructor(router:Router){
    router.resetConfig(publicRoutes);
  }
}
