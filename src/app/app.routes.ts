import { Routes } from '@angular/router';

import { NavTabsComponent } from '@src/app/nav-tabs/nav-tabs.component';
import { TranslateComponent } from '@src/app/translate/translate.component';
import { HistoryComponent } from '@src/app/history/history.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/tabs',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    component: NavTabsComponent,
    children: [
      {
        path: '',
        redirectTo: '/translate',
        pathMatch: 'full'
      },
      { path: 'translate', component: TranslateComponent, outlet: 'translate' },
      {
        path: 'history',
        component: HistoryComponent,
        outlet: 'history'
      }
    ]
  }
];
