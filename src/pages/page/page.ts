import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page2 } from '../page2/page2';


@Component({
  selector: 'page-page',
  templateUrl: 'page.html',
})
export class Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page');
  }

  pushPage2(){
    this.navCtrl.push(Page2)
  }

}
