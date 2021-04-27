import { Component, OnInit } from '@angular/core';
import { AuthRest } from '@api/rest/auth.rest';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private rest: AuthRest) { }

  ngOnInit(): void {
  }

  public getUsers() {
    this.rest.getUsers().subscribe(console.log)
  }

}
