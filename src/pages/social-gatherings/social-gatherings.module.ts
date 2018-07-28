import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocialGatheringsPage } from './social-gatherings';

@NgModule({
  declarations: [
    SocialGatheringsPage,
  ],
  imports: [
    IonicPageModule.forChild(SocialGatheringsPage),
  ],
})
export class SocialGatheringsPageModule {}
