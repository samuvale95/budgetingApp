import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { publicRoutes } from './public.routes';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [],
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss'
})
export class PublicComponent {
  constructor(router:Router){
    router.resetConfig(publicRoutes);
  }
}
