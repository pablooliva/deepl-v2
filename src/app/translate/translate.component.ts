import { Component, OnDestroy, OnInit } from '@angular/core';
import { EventData, Page, TextView } from '@nativescript/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AppStateService, TranslateConfig } from '@src/app/services/app-state.service';
import { HttpService, TranslationSource } from '@src/app/services/http.service';

@Component({
  selector: 'dl-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit, OnDestroy {
  public translateConfig: TranslateConfig[];
  public inputVal: string;
  public outputVal: string;
  public textViewElem: TextView;

  private _destroyed: Subject<boolean> = new Subject();

  constructor(
    private _page: Page,
    private _http: HttpService,
    private _appStateService: AppStateService
  ) {}

  ngOnInit() {
    this._page.actionBarHidden = true;
    this.translateConfig = [
      { fromLan: 'german', toLan: 'english' },
      { fromLan: 'english', toLan: 'german' }
    ];

    this.inputVal = '';
    this.outputVal = '';

    this._appStateService.tabViewIndexState.pipe(takeUntil(this._destroyed)).subscribe(state => {
      this.inputVal = state.item.translationQuery;
      this._translate(state.item.fromTo);
    });
  }

  onTap(e: EventData, cfg: TranslateConfig) {
    const isNewEntry = true;
    this.inputVal = this.inputVal.trim();
    this._translate(cfg, isNewEntry);
    this.textViewElem.dismissSoftInput();
  }

  private _translate(cfg: TranslateConfig, newEntry: boolean = false): void {
    this._http.translate(cfg.fromLan as TranslationSource, this.inputVal).subscribe(
      result => {
        this.outputVal = result;

        if (newEntry) {
          this._pushToTransHistory(cfg);
        }
      },
      error => console.error('error', error)
    );
  }

  private _pushToTransHistory(cfg: TranslateConfig): void {
    const now = new Date();
    this._appStateService.addToTransHistory({
      date: now,
      translationQuery: this.inputVal,
      fromTo: {
        fromLan: cfg.fromLan,
        toLan: cfg.toLan
      }
    });
  }

  onValChange(): void {
    if (this.outputVal) {
      this.outputVal = '';
    }
  }

  onFocus(e: EventData): void {
    this.textViewElem = <TextView>e.object;
    this.textViewElem.editable = true;
  }

  ngOnDestroy(): void {
    this._destroyed.next(true);
    this._destroyed.complete();
  }
}
