import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TelalistarPage } from './telalistar';

@NgModule({
  declarations: [
    TelalistarPage,
  ],
  imports: [
    IonicPageModule.forChild(TelalistarPage),
  ],
})
export class TelalistarPageModule {}
