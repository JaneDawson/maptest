import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, IonicApp } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Page } from '../pages/page/page';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = Page;


  constructor(platform: Platform, 
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              ionicApp: IonicApp) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // Prevent HW Back Button from closing (exiting) App
      platform.registerBackButtonAction(() => {
        
        console.log("HW Back Button registered")

        let activePortal = ionicApp._loadingPortal.getActive() ||
          ionicApp._modalPortal.getActive() ||
          ionicApp._toastPortal.getActive() ||
          ionicApp._overlayPortal.getActive();

        if (activePortal) {
          activePortal.dismiss();
          console.log("close Portal")
          return;
      }


        if(this.nav.canGoBack()){
          this.nav.pop();
          console.log("pop Nav")
        }else{
          // Minimize App
          console.log("Minimize App. Additional Plugin necessary.")
        }
      });

    });
  }
}

