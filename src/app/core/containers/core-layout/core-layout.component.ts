import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@features/auth/auth.service';

@Component({
  selector: 'core-layout',
  templateUrl: './core-layout.component.html',
  styleUrls: ['./core-layout.component.scss']
})
export class CoreLayoutComponent implements OnInit {
  public class: boolean = true;
  constructor(public router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    this.authService.state$.subscribe(
      (res:boolean)=> this.changeClass(res)
    )
  }

  public changeClass(bool: boolean) {
    this.class = bool;
  
  }

  public transitionEnd() {
    // this.router.navigate(['dashboard'])
  }

}
