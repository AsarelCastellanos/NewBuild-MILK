import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';


@IonicPage()
@Component({
  selector: 'page-event-info',
  templateUrl: 'event-info.html',
})
export class EventInfoPage {
  title;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public http: Http) {
    this.title = navParams.data.data;
    console.log(this.title);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventInfoPage');
  }

  regularShare(){
    this.socialSharing.share("", null,"{{title.img}}", null); 
  }

  saveEvent(){
    var data = {
      name: "John Doe",
      event:this.title
    }
    console.log(data);
    this.http.post("https://miligate.herokuapp.com/saveEvent", data).subscribe(function
    (){
      console.log("success");
    },function(err){
      console.log(err)
    })
    let alert = this.alertCtrl.create({
      title: 'Event Saved!',
      subTitle: 'You can now view in saved events.',
      buttons: ['OK']
    });
    alert.present();
  }

}
