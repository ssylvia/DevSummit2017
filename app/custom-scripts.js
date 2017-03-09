define(["dojo/topic","esri/tasks/query"], function(topic, Query) {
  /*
   * Custom Javascript to be executed while the application is initializing goes here
   */

   topic.subscribe("story-loaded-map", function(result){
      if (result.index === 0) {
         var map = app.maps[result.id].response.map;
         var pointLayer = map.getLayer('BikingLight_1312');
         var query = new Query();
         query.where = "1=1";
         query.outFields = ["WEATHER"];

         pointLayer.queryFeatures(query).then(function(res) {
            var features = res.features;

            var allCount = 0;
            var clearCount = 0;
            var cloudyCount = 0;
            var freezeRainCount = 0;
            var mistCount = 0;
            var rainCount = 0;
            var unknownCount = 0;

            for (i = 0; i < features.length; i++) {
               allCount++;

               switch (features[i].attributes.WEATHER) {
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
         });
      }
   });
});
