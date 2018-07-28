import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CenterInfoPage } from '../center-info/center-info';

@IonicPage()
@Component({
  selector: 'page-centers',
  templateUrl: 'centers.html',
})
export class CentersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CentersPage');
  }

  toCenterInfo(data) {
    this.navCtrl.push(CenterInfoPage, data)
  }

}
