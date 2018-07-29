import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { EventInfoPage } from '../event-info/event-info';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-festivals',
  templateUrl: 'festivals.html',
})
export class FestivalsPage {

  public events;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.downloadEvents();
  }

  downloadEvents() {
    this.events = null;

    this.http.get('https://milk-server.herokuapp.com/pullFestivals').map(res => res.json()).subscribe(data => {
      this.events = data;
      console.log(this.events)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FestivalsPage');
  }

  toInfo(e) {
    this.navCtrl.push(EventInfoPage, { data: e })
  }

}
