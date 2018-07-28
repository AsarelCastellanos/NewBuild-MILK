import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MakeYourOwnPage } from './make-your-own';

@NgModule({
  declarations: [
    MakeYourOwnPage,
  ],
  imports: [
    IonicPageModule.forChild(MakeYourOwnPage),
  ],
})
export class MakeYourOwnPageModule {}
