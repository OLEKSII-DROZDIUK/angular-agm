#Google map marker

**Need:
Angular CLI: 10.0.0+


QUICK START in local machine
-----------
1) In main folder run command "npm install";
2) Open src/app/components/google-map/google-map.module.ts and set apiKey: string in AgmCoreModule. You neeed to provide a Google Maps API key to be able to see a Map. Get an API key [here](https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key)
3) Run "ng serve" command for develop run app.


### Package in front(Angular): 
```
	"@agm/core": "1.0.0",
	"@angular/animations": "~10.0.0",
	"@angular/common": "~10.0.0",
	"@angular/compiler": "~10.0.0",
	"@angular/core": "~10.0.0",
	"@angular/forms": "~10.0.0",
	"@angular/platform-browser": "~10.0.0",
	"@angular/platform-browser-dynamic": "~10.0.0",
	"@angular/router": "~10.0.0",
	"rxjs": "~6.5.5",
	"tslib": "^2.0.0",
	"zone.js": "~0.10.3"
```

### Functional:

-Add many marker in world map;
-See detail info this marker, need click on this marker;
-Delete any marker , nedd click on marker and click the button "del marker";
-Move any marker anywere in world map.
