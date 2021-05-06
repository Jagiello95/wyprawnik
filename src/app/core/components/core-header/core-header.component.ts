import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-core-header',
  templateUrl: './core-header.component.html',
  styleUrls: ['./core-header.component.scss']
})
export class CoreHeaderComponent implements OnInit {

  constructor(private router: Router) { }

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

}
