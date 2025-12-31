import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';
import { ColorPickerModule } from 'primeng/colorpicker';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, InputOtpModule, ColorPickerModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  currentStep: any ;
  phoneNumber: string = '';
  value: any = '' ;
  color : any = '';
  ngOnInit() {
    this.currentStep = 2;
    
  }
  login() {
  }
  orAction() {

  }

}


