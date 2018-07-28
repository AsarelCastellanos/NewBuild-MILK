import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PerformancesPage } from './performances';

@NgModule({
  declarations: [
    PerformancesPage,
  ],
  imports: [
    IonicPageModule.forChild(PerformancesPage),
  ],
})
export class PerformancesPageModule {}
