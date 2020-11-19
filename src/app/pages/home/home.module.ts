import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HOME_ROUTING } from './home.routing';
// Components
import { HomeComponent } from './home.component';
import { GoogleMapModule } from '../../components/google-map/google-map.module';

@NgModule({
	imports: [
		CommonModule,
		HOME_ROUTING,
		GoogleMapModule
	],
	declarations: [
		HomeComponent,
	],
	exports: [
		HomeComponent
	],
})
export class HomeModule {}
