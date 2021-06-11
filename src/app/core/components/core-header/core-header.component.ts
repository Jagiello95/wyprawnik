import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthRest } from '@api/rest/auth.rest';
import { AuthService } from '@features/auth/auth.service';

@Component({
  selector: 'app-core-header',
  templateUrl: './core-header.component.html',
  styleUrls: ['./core-header.component.scss']
})
export class CoreHeaderComponent implements OnInit {

  constructor(private router: Router, private rest: AuthRest, private auth: AuthService) { }

  ngOnInit(): void {
    document.body.setAttribute('class', `theme-nautic`)
  }

  public login() {
    console.log('here')
    this.router.navigate(['/auth/login']);
  }

  public register() {
    this.router.navigate(['/auth/register']);
  }

  public logout() {
    this.router.navigate(['/auth/login']);
    this.auth.logout()
  }


  public dashboard() {
    this.router.navigate(['/dashboard']);
  }

  public squad() {
    this.router.navigate(['/squad']);
  }

  public map() {
    this.router.navigate(['/map']);
  }

  public profile() {
    this.router.navigate(['/profile']);
  }


  public users() {
    this.rest.getUsers().subscribe(console.log)
  }

}
