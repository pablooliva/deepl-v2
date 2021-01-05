import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { NavTabsComponent } from '@src/app/nav-tabs/nav-tabs.component';
import { HistoryComponent } from '@src/app/history/history.component';
import { TranslateComponent } from '@src/app/translate/translate.component';

@NgModule({
  declarations: [AppComponent, NavTabsComponent, HistoryComponent, TranslateComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
