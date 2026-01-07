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
  phoneNumber: any = '';
  value: any = '' ;
  color : any = '';
  remainingTime : any;
  ngOnInit() {
    this.currentStep = 1;
    this.remainingTime = 30;
    
  }
  login() {
  }
  orAction() {
  }
  sendOtp() {
    if (this.phoneNumber.length == 11) {
      
      this.currentStep = 2;
      setInterval(() => {
        if (this.remainingTime > 0 ) {
          this.remainingTime--;
        } 
      }, 1000);
    }
    else {alert('شماره اشتباه وارد شده است!')}
  }


}


