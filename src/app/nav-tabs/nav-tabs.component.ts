import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dl-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss']
})
export class NavTabsComponent implements OnInit {
  public selectedIndex: number;

  constructor(private _router: RouterExtensions, private _route: ActivatedRoute) {}

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
