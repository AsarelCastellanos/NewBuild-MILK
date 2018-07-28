import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { SocialGatheringsPage } from '../social-gatherings/social-gatherings';
import { FestivalsPage } from '../festivals/festivals';
import { PerformancesPage } from '../performances/performances';
import { MakeYourOwnPage } from '../make-your-own/make-your-own';

@IonicPage()
@Component({
  selector: 'page-events',
  templateUrl: 'events.html',
})
export class EventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsPage');
  }

  toSocialGatherings() {
    this.navCtrl.push(SocialGatheringsPage);
  }

  toFestivals() {
    this.navCtrl.push(FestivalsPage);
  }

  toPerformances() {
    this.navCtrl.push(PerformancesPage);
  }

  toMakeYourOwn() {
    this.navCtrl.push(MakeYourOwnPage);
  }

}
