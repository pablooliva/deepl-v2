import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppStateService, TranslationHistoryItem } from '@src/app/services/app-state.service';
import { Subject } from 'rxjs';
import { Page } from '@nativescript/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'dl-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit, OnDestroy {
  public historyItems: TranslationHistoryItem[];

  private _destroyed: Subject<boolean> = new Subject();

  constructor(
    private _page: Page,
    private _router: RouterExtensions,
    private _route: ActivatedRoute,
    private _appState: AppStateService
  ) {}

  ngOnInit() {
    this._page.actionBarHidden = true;
    this._appState.transHistoryState.pipe(takeUntil(this._destroyed)).subscribe(items => {
      this.historyItems = items;
      this.historyItems.reverse();
    });
  }

  onItemTap(item: TranslationHistoryItem): void {
    const translateTabViewIndex = 0;
    this._appState.goToTranslate({
      tabViewIndex: translateTabViewIndex,
      item: item
    });

    this._router.navigate(['../tabs', { outlets: { translate: ['translate'] } }], {
      skipLocationChange: true,
      relativeTo: this._route.parent
    });
  }

  remove(idx: number): void {
    this._appState.removeFromTransHistory(idx);
  }

  ngOnDestroy(): void {
    this._destroyed.next(true);
    this._destroyed.complete();
  }
}
