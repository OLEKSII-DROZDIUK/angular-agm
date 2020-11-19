import {Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	encapsulation : ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.Default,
})
export class HomeComponent {

}