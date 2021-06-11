import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthRest } from '@api/rest/auth.rest';
import { AuthService } from '@features/auth/auth.service';
import { LoginForm } from '@features/auth/forms/login.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginForm]
})
export class LoginComponent implements OnInit {
  public login = new FormControl('value')
  public form: any;
  public clicked: boolean = false;
  
  constructor(private rest: AuthRest, public loginForm: LoginForm, public router: Router, private auth: AuthService) { }

  ngOnInit(): void {
    this.form = this.loginForm.init();
  }

  public getUsers() {
    this.rest.getUsers().subscribe(console.log)
  }

  public buttonClicked() {
    this.clicked = true;
  }

  public submit() {
    const model = this.loginForm.prepareModel()
    this.rest.login(model).subscribe(
 
      (res=> {
        this.auth.token = res.userJwt
        this.router.navigate(['dashboard']);
      }),
      (error: Error) => console.log(error)
    );
  }

}
