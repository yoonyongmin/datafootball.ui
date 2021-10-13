import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('', [Validators.required, Validators.email]);
  id = new FormControl('', [Validators.required, Validators.maxLength(8)]);
  password = new FormControl('', [Validators.required, Validators.minLength(4)]);

  hide = true;

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return '필수 입력 항목';
    }
    return this.email.hasError('email') ? '이메일 형식이 아닙니다' : '';
  }

  getIdErrorMessage() {
    if (this.id.hasError('required')) {
      return '필수 입력 항목';
    }
    return this.id.hasError('maxLength') ? '아이디 형식이 맞지않습니다' : '';
  }

  getPasswordErrorMessage() {
    if (this.password.hasError('required')) {
      return '필수 입력 항목';
    }
    return this.password.hasError('minLength') ? '비밀번호 형식이 맞지않습니다' : '';

  }

  googleLogin() : void {
    this.userService.login().subscribe(Response => this.router.navigate(['mvp']));
  }

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

}
