import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';
import { ColorPickerModule } from 'primeng/colorpicker';
import { UserService } from '../services/user.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, InputOtpModule, ColorPickerModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  currentStep: any;
  phoneNumber: any = '';
  value: any = '';
  color: any = '';
  remainingTime: any;
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.currentStep = 1;
    this.remainingTime = 30;

  }
  login() {
  }
  orAction() {
  }
  async sendOtp() {
    if (this.phoneNumber.length == 11) {
      try {
        let res: any = await this.userService.checkPhoneNumber(this.phoneNumber).toPromise();
        if (res[0].fldHavingMobile) {
          this.currentStep = 2;
          setInterval(() => {
            if (this.remainingTime > 0) {
              this.remainingTime--;
            }
          }, 1000);
        }
      }
      catch { }

    }
    else { alert('شماره اشتباه وارد شده است!') }
  }

}


