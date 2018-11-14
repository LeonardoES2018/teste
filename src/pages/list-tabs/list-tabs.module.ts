import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListTabsPage } from './list-tabs';

@NgModule({
  declarations: [
    ListTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(ListTabsPage),
  ],
})
export class ListTabsPageModule {}
