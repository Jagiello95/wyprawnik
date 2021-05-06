import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'core-layout',
  templateUrl: './core-layout.component.html',
  styleUrls: ['./core-layout.component.scss']
})
export class CoreLayoutComponent implements OnInit {
  public class: boolean = true;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  public changeClass() {
    this.class = !this.class;
  
  }

  public transitionEnd() {
    // this.router.navigate(['dashboard'])
  }

}
