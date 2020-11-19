import {Component, ChangeDetectionStrategy, ViewEncapsulation  } from '@angular/core';
// interfaces
import IMapEventCoords from '../../interface/MapEventClick';
import IGoogleMarker from '../../interface/MapMarker';

@Component({
	selector: 'google-map',
	templateUrl: './google-map.component.html',
	styleUrls: ['./google-map.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation : ViewEncapsulation.None
})
export class GoogleMapComponent {
	public markers: IGoogleMarker[] = [];
	public zoom: number = 12;
	// start position  - Kiev
  public lat: number = 50.46461272855502;
	public lng: number = 30.520443009041752;

  public mapClicked(coords: IMapEventCoords) {
    this.markers.push({
      lat: coords.lat,
      lng: coords.lng,
      draggable: true
    })
	}

	public markerDragEnd(coords: IMapEventCoords, i: number) {
		this.markers[i].lat = coords.lat;
		this.markers[i].lng = coords.lng;
  }
	
	public delMarker(index: number) {
		this.markers.splice(index, 1);
	}
}

