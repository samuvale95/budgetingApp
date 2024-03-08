import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { SvgComponent } from "../../shared/svg/svg.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { PublicActions } from '../store/public.actions';
import { Store } from '@ngrx/store';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [MatDividerModule, SvgComponent, RouterOutlet, RouterLink, ReactiveFormsModule]
})
export class LoginComponent {

    loginForm: FormGroup = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });

    constructor(
        private store: Store,
        private fb: FormBuilder
    )
    {}

    login() {
        if(this.loginForm.valid){
            this.store.dispatch(PublicActions.login({
                email: this.loginForm.get('email')?.value, 
                password:this.loginForm.get('password')?.value
            }));
        }
    }
}
