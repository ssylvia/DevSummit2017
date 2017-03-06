### App ID
```
353a71db2e434022b64b84272db0e819
```

### Theme
```json
"name": "side-default-1-modified",
"themeMajor": "white",
"dotNav": "#000",
"panel": "#F9F6F4",
"media": "#EEEEEE",
"text": "#000000",
"textLink": "#9F3D3D",
"softText": "#c0c0c0",
"softBtn": "#444",
"esriLogo": "black"
```

### Custom CSS
```css
.title {
  color: #9F3D3D;
}

.accident-count {
  color: #000;
  font-weight: bold;
  font-size: 18px;
}

#all {
  font-size: 24px;
}
```

### Custom Scripts
```js
define(["dojo/topic"], function(topic) {
  /*
   * Custom Javascript to be executed while the application is initializing goes here
   */

   topic.subscribe("story-loaded-map", function(result){
      if (result.index === 0) {
         var map = app.maps[result.id].response.map;
         var graphics = map.getLayer('BikingLight_1312').graphics;
         var allCount = 0;
         var clearCount = 0;
         var cloudyCount = 0;
         var freezeRainCount = 0;
         var mistCount = 0;
         var rainCount = 0;
         var unknownCount = 0;

         for (i = 0; i < graphics.length; i++) {
            allCount++;

            switch (graphics[i].attributes.WEATHER) {
               case 'Clear':
                  clearCount++;
                  break;
               case 'Cloudy':
                  cloudyCount++;
                  break;
               case 'Freezing Rain Or Freezing Drizzle':
                  freezeRainCount++;
                  break;
               case 'Mist':
                  mistCount++;
                  break;
               case 'Rain':
                  rainCount++;
                  break;
               default:
                  unknownCount++;
            }
         }

         document.querySelector('#all').innerHTML = allCount;
         document.querySelector('#sunny').innerHTML = clearCount;
         document.querySelector('#cloudy').innerHTML = cloudyCount;
         document.querySelector('#freezeRain').innerHTML = freezeRainCount;
         document.querySelector('#mist').innerHTML = mistCount;
         document.querySelector('#rain').innerHTML = rainCount;
         document.querySelector('#unknown').innerHTML = unknownCount;
      }
   });
});

```
