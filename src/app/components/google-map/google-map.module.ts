import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { GoogleMapComponent } from './google-map.component';

@NgModule({
	imports: [
		CommonModule,
		AgmCoreModule.forRoot({
			apiKey: ''
		})
	],
	declarations: [
		GoogleMapComponent,
	],
	exports: [
		GoogleMapComponent,
	],
})
export class GoogleMapModule { }
