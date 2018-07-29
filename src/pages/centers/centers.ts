import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CenterInfoPage } from '../center-info/center-info';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-centers',
  templateUrl: 'centers.html',
})
export class CentersPage {
  public centers;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.downloadEvents();
  }

  downloadEvents() {
    this.centers = null;

    this.http.get('https://milk-server.herokuapp.com/pullCenters').map(res => res.json()).subscribe(data => {
      this.centers = data;
      console.log(this.centers)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialGatheringsPage');
  }

  toInfo(center) {
    this.navCtrl.push(CenterInfoPage, { data: center })
  }
}
