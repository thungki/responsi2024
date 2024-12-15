import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map!: L.Map;
  basemaps!: Record<string, L.TileLayer>;

  constructor() {}

  ngOnInit(){}

      13
    );

    // Menambahkan beberapa lapisan basemap
    const openStreetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map); // Basemap default yang langsung ditampilkan

    const satellite = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>'
    });

    const topoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://opentopomap.org">OpenTopoMap</a> contributors'
    });

    // Menambahkan galeri basemap
    const baseMaps = {
      "OpenStreetMap": openStreetMap,
      "Satellite": satellite,
      "Topo Map": topoMap
    };

    // Menambahkan kontrol untuk memilih basemap
    L.control.layers(baseMaps).addTo(this.map);

    // Menambahkan Marker Kustom
    const markerIcon = L.icon({
      iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',  // Ganti dengan URL ikon marker default dari CDN
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',  // Ganti dengan URL ikon marker default 2x dari CDN
      shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',  // Ganti dengan URL bayangan marker default dari CDN
      iconSize: [25, 41],  // Sesuaikan dengan ukuran ikon Anda
      iconAnchor: [12, 41]  // Sesuaikan dengan titik penunjuk ikon Anda
    });

    // Marker pertama
    const marker1 = L.marker(
      [-7.784377037607455, 110.37212241840929], {
        icon: markerIcon,
      }
    ).addTo(this.map);

    // Marker kedua
    const marker2 = L.marker(
      [-7.7851187060706515, 110.3714096124118], {
        icon: markerIcon,
      }
    ).addTo(this.map);

    // Marker ketiga
    const marker3 = L.marker(
      [-7.799099507638406, 110.36474417168654], {
        icon: markerIcon,
      }
    ).addTo(this.map);

    // Marker keempat
    const marker4 = L.marker(
      [-7.797735524441797, 110.3653423832555], {
        icon: markerIcon,
      }
    ).addTo(this.map);

    // Marker kelima
    const marker5 = L.marker(
      [-7.675930216034454, 110.41698098461868], {
        icon: markerIcon,
      }
    ).addTo(this.map);


    // Pop-Up untuk marker
    marker1.bindPopup('Raminten Kitchen').openPopup();
    marker2.bindPopup('The House Of Raminten').openPopup();
    marker3.bindPopup('Hamzah Batik').openPopup();
    marker4.bindPopup('Raminten Uborampe').openPopup();
    marker5.bindPopup('The Waroeng of Raminten').openPopup();
  }
}
