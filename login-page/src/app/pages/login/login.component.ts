import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimaryImputComponent } from "../../components/primary-imput/primary-imput.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DefaultLoginLayoutComponent, ReactiveFormsModule, LoginComponent, PrimaryImputComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(){
    this.loginForm = new FormGroup({
      user: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required, Validators.minLength(6)])
    })
  }
}
