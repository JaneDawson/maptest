import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2 {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2Page');
  }

  pushMap(){
    this.navCtrl.push(HomePage)
  }

}
