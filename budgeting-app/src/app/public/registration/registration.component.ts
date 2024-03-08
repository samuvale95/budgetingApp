import { Component } from '@angular/core';
import { SvgComponent } from "../../shared/svg/svg.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { PublicActions } from '../store/public.actions';

@Component({
    selector: 'app-registration',
    standalone: true,
    templateUrl: './registration.component.html',
    styleUrl: './registration.component.scss',
    imports: [SvgComponent, RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule]
})
export class RegistrationComponent {
    
    registrationForm: FormGroup = this.fb.group({
        email: ['', Validators.required],
        password1: ['', Validators.required],
        password2: ['', Validators.required]
    })

    constructor( 
        private store: Store,
        private fb: FormBuilder
    ){}

    registration(){
        this.store.dispatch(PublicActions.registration({email: this.registrationForm.get('email')?.value, password: this.registrationForm.get('password1')?.value}));
    }
}
