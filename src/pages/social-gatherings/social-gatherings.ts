import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { EventInfoPage } from '../event-info/event-info';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-social-gatherings',
  templateUrl: 'social-gatherings.html',
})
export class SocialGatheringsPage {

  public events;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.downloadEvents();
  }

  downloadEvents() {
    this.events = null;

    this.http.get('https://milk-server.herokuapp.com/pullSocial').map(res => res.json()).subscribe(data => {
      this.events = data;
      console.log(this.events)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialGatheringsPage');
  }

  toInfo(e) {
    this.navCtrl.push(EventInfoPage, { data: e })
  }

}
