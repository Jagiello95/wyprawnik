import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';

@Component({
  selector: 'app-core',
  template: `
    <router-outlet></router-outlet>`,
  styles: [],
})
export class CoreComponent implements OnInit {
  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute
    ) {}



  public ngOnInit(): void {}
}
