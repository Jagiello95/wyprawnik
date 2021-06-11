import { Component, OnInit } from '@angular/core';
import { AuthRest } from '@api/rest/auth.rest';
import { LoginForm } from '@features/auth/forms/login.form';
import { RegisterForm } from '@features/auth/forms/register.form';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [ RegisterForm]
})
export class RegisterComponent implements OnInit {
  public class: boolean = false;
  public form: any;
  constructor(public registerForm: RegisterForm, private rest:AuthRest) { }

  ngOnInit(): void {
    this.form = this.registerForm.init()
  }

  register() {
    console.log('submit')
    const model = this.registerForm.prepareModel()
    console.log(model)
    this.rest.register(model).subscribe(console.log)
  }


}
