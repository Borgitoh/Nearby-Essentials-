import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NearbyEssentials';
  latitude: number | null = null;
  longitude: number | null = null;
  constructor() {

  }

  getGeo() {
    this.getLocation()
    .then((position) => {
      console.log(position);

      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    })
    .catch((error) => {
      console.error('Erro ao obter localização:', error);
    });
  }
  getLocation(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(resolve, reject);

      } else {
        reject('Geolocation not supported by this browser.');
      }
    });
  }

}
