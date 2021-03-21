import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { NavTabsComponent } from '@src/app/nav-tabs/nav-tabs.component';
import { HistoryComponent } from '@src/app/history/history.component';
import { TranslateComponent } from '@src/app/translate/translate.component';
import { UNIVERSAL_ROUTER } from '@src/app/tokens';

@NgModule({
  declarations: [AppComponent, NavTabsComponent, HistoryComponent, TranslateComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [{ provide: UNIVERSAL_ROUTER, useExisting: Router }],
  bootstrap: [AppComponent]
})
export class AppModule {}
