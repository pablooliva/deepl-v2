import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {
  NativeScriptCommonModule,
  NativeScriptFormsModule,
  NativeScriptHttpClientModule,
  NativeScriptModule
} from '@nativescript/angular';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { NavTabsComponent } from '@src/app/nav-tabs/nav-tabs.component';
import { HistoryComponent } from '@src/app/history/history.component';
import { TranslateComponent } from '@src/app/translate/translate.component';

@NgModule({
  declarations: [AppComponent, NavTabsComponent, HistoryComponent, TranslateComponent],
  imports: [
    NativeScriptModule,
    NativeScriptCommonModule,
    NativeScriptHttpClientModule,
    NativeScriptFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
