import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthRest } from '@api/rest/auth.rest';
import { LoginForm } from '@features/auth/forms/login.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthRest, LoginForm]
})
export class LoginComponent implements OnInit {
  public login = new FormControl('value')
  public form: any;
  public clicked: boolean = false;
  constructor(private rest: AuthRest, public loginForm: LoginForm, public router: Router) { }

  ngOnInit(): void {
    this.form = this.loginForm.init();
  }

  public getUsers() {
    this.rest.getUsers().subscribe(console.log)
  }

  public buttonClicked() {
    this.clicked = true;
  }

  public redirect() {
    // this.router.navigate(['/dashboard']);
  }

}
