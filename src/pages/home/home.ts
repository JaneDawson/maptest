import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, MarkerOptions, HtmlInfoWindow } from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map:GoogleMap;

  constructor(public navCtrl: NavController, public googleMaps: GoogleMaps) {

  }

  // ngAfterViewInit() {
  //   this.loadMap();
  // }

  ionViewDidEnter(){
    setTimeout(this.loadMap.bind(this), 2000);
  }

  loadMap() {
    
    let element: HTMLElement = document.getElementById('map');
    
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: -33.87365,
          lng: 151.20689
        },
        zoom: 14,
        tilt: 30
      }
    };

    this.map = this.googleMaps.create(element, mapOptions);

    // listen to MAP_READY event
    // You must wait for this event to fire before adding something to the map or modifying it in anyway
    this.map.one(GoogleMapsEvent.MAP_READY).then( () => {

      let markerOptions: MarkerOptions = {
        position: {
          lat: -33.87365,
          lng: 151.20689
        },
        zIndex: 10
      };

      let infoWindowHTMLInput:string = 
        "<b>Test-Title</b>"+"<br>"+
        "<span>Test-Snippet</span>";
      
      markerOptions.icon = { 
        'url': 'www/assets/icon/marker2.png',
        'size': { width: 21, height: 34 }
      };
      markerOptions.infoWindowAnchor= [11, 0];

      var htmlInfoWindow = new HtmlInfoWindow();

      var div = document.createElement("div");
      div.innerHTML = infoWindowHTMLInput;
      div.addEventListener("click", () => {
        console.log("infowindow clicked");
      });
      
      htmlInfoWindow.setContent(div);

      this.map.addMarker(markerOptions).then( marker => {
        // marker.setIconAnchor(21, 17);

        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          htmlInfoWindow.open(marker);
        });
        
      });

    });
  }

}
