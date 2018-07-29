import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-forums',
  templateUrl: 'forums.html',
})
export class ForumsPage {
  texts = [];
  newText = '';
  itemCount = 0;
  info;
  name = 'No Class Selected';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.info = this.navParams.get('info');
    if (this.info != undefined) {
      this.texts = this.info.comments;
      this.name = this.info.teacherName;
    } else {
      this.info = {
        comments: [
          {
            likes: 0,
            text: 'This is the first comment',
          }
        ]
      };
      this.texts = this.info.comments;
      this.name = this.info.teacherName;
    }
  }

  addPost() {
    this.texts.push(
      {
        text: this.newText,
        likes: 0
      }
    );
    this.newText = '';
    this.itemCount = this.texts.length;
  }

  likePost(likedPost) {

    if (likedPost.likes == 0) {
      likedPost.likes += 1
    }

    console.log(likedPost.likes)
    console.log("Hello World")

    // Sorts Liked Posts
    this.texts = this.texts.sort((a, b) => {
      if (a.likes > b.likes) {
        return -1;
      }
      if (a.likes < b.likes) {
        return 1;
      }
      return 0;
    })
    console.log(this.texts);



  }

}
