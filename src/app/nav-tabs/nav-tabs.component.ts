import { Component, Inject, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { ActivatedRoute, Router } from '@angular/router';

import { UNIVERSAL_ROUTER } from '@src/app/tokens';

@Component({
  selector: 'dl-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss']
})
export class NavTabsComponent implements OnInit {
  public selectedIndex: number;

  constructor(
    @Inject(UNIVERSAL_ROUTER) private _router: RouterExtensions | Router,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.selectedIndex = 0;
    this._router.navigate(
      [
        './',
        {
          outlets: {
            translate: ['translate'],
            history: ['history']
          }
        }
      ],
      {
        relativeTo: this._route,
        transition: { name: 'slideLeft' }
      }
    );
  }

  navTo(translate: string) {}
}
