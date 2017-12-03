  //This will not change
mapboxgl.accessToken = 'pk.eyJ1IjoiaWNvbmVuZyIsImEiOiJjaXBwc2V1ZnMwNGY3ZmptMzQ3ZmJ0ZXE1In0.mo_STWygoqFqRI-od05qFg';


//Dark Canvas
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/iconeng/cjahqpuz797612sqajznqxkyw',
    zoom: 14.2,
    //minZoom:11,
   // maxZoom:19.5,
    hash: true,
    center: [-105.2577,40.0031] 
});



//Create vectors for menu items
var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input'); 


//BaseMap Switch
function switchLayer(layer) {
    var layerId = layer.target.value;
    map.setStyle('mapbox://styles/iconeng/' + layerId);
    $('.layer-off').prop('checked', false);
    $('.layer-on').prop('checked', true);
}
for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
}




map.on('style.load', function () {




    map.addSource('structures', {
        type: 'vector',
        url: 'mapbox://iconeng.4ifywpjt'      
    });
 
    map.addSource('parcel', {
        type: 'vector',
        url: 'mapbox://iconeng.9oi8eiqd'      
    });

    //Utilities
    map.addSource('san', {
      'type': 'vector',
      'url': 'mapbox://iconeng.4cb5wdl9'      
    }); 

    map.addSource('wtr', {
      'type': 'vector',
      'url': 'mapbox://iconeng.au4crcts'
     }); 
   
    map.addSource('storm', {
      'type': 'vector',
      'url': 'mapbox://iconeng.0lva1cj0'     
    }); 

    //Daylight Opp
    map.addSource('dayLightOpp', {
      'type': 'vector',
      'url': 'mapbox://iconeng.6sgvzcya'   //SBK2_DaylightOpp-bdr7do    
    }); 

    //Prop Trial
    map.addSource('propTrails', {
      'type': 'vector',
      'url': 'mapbox://iconeng.cszraife'   //SBK2_ProposedTrails-88pol2  
    }); 

    //Envir Restoration Area
    map.addSource('restorArea', {
      'type': 'vector',
      'url': 'mapbox://iconeng.45j481w2'  //SBK2_EnviroRestorationArea-ae49du     
    });  









//++++++++++++++++++++++++++++++++ ADD LAYER +++++++++++++++++++++++++++++++++++++

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//-----------------------------------Base Layers----------------------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    
 
    //san
    map.addLayer({
      'id': 'san',                               
      'source': 'san',
      'source-layer': 'SBK2_SAN-6htngq',     
      'type': 'line',        
      'paint': {
         'line-color': '#96D400', 
         'line-width': 2.6,
         'line-opacity': 0.7,
         'line-dasharray': [3, 1.5],
       },
      'layout': {'visibility': 'visible'}
    },'road-label-small');


  map.addLayer({
       'id': 'sanLabels',
       'type': 'symbol',                                
       'source': 'san',
       'source-layer': 'SBK2_SAN-6htngq',
       'layout': {
         'visibility': 'visible',
         'symbol-placement': 'line',
         'text-field': 'SAN',
         'text-font': ['Open Sans Bold','Arial Unicode MS Regular'],
         'text-size': 12,
          },
       'paint': {
         'text-opacity': 0.75,
         'text-color': '#96D400',
         'text-halo-color': 'rgb(250,250,250 )',
         'text-halo-width': 0.7
        }
    },'road-label-small');

    //Green Restoration Area
    map.addLayer({
    id: 'restorArea',
    source: 'restorArea',
    'source-layer': 'SBK2_EnviroRestorationArea-ae49du', 
    type: 'fill',
    layout: {
        'visibility': 'visible'
      },
    paint: {
        'fill-opacity': 0.6,
        'fill-color': '#22BA61',
        'fill-outline-color': '#22BA61'
    }
  }, 'road-label-small');

    

    //Prop trails
    map.addLayer({
      'id': 'propTrails',                               
      'source': 'propTrails',
      'source-layer': 'SBK2_ProposedTrails-88pol2',     
      'type': 'line',        
      'paint': {
         'line-width': 3,
         'line-color': '#22BA61', 
         'line-opacity': 0.9,
       },
      'layout': {'visibility': 'visible'}
    },'road-label-small');


    //Daylight Opp
    map.addLayer({
      'id': 'dayLightOpp',                               
      'source': 'dayLightOpp',
      'source-layer': 'SBK2_DaylightOpp-bdr7do',     
      'type': 'line',        
      'paint': {
         'line-width': 3,
         'line-color': '#22BA61', 
         'line-opacity': 0.9,
       },
      'layout': {'visibility': 'visible'}
    },'road-label-small');


  
    //Wtr
    map.addLayer({
      'id': 'wtr',                               
      'source': 'wtr',
      'source-layer': 'SDK2_WTR-c1bhji',     
      'type': 'line',        
      'paint': {
         'line-width': 2.6,
         'line-color': '#00FDD9', 
         'line-opacity': 0.7,
         'line-dasharray': [3, 1.5],
       },
      'layout': {'visibility': 'visible'}
    },'road-label-small');


  map.addLayer({
       'id': 'wtrLabels',
       'type': 'symbol',                                
       'source': 'wtr',
       'source-layer': 'SDK2_WTR-c1bhji',
       'layout': {
         'visibility': 'visible',
         'symbol-placement': 'line',
         'text-field': 'WTR',
         'text-font': ['Open Sans Bold','Arial Unicode MS Regular'],
         'text-size': 12,
          },
       'paint': {
         'text-opacity': 0.75,
         'text-color': '#00FDD9',
         'text-halo-color': 'rgb(250,250,250 )',
         'text-halo-width': 0.7
        }
    },'road-label-small');


    //Storm
    map.addLayer({
      'id': 'storm',                               
      'source': 'storm',
      'source-layer': 'SBK2_STORM-40zbe5',     
      'type': 'line',        
      'paint': {
         'line-color': '#004AFD', 
         'line-width': 2.6,
        'line-opacity': 0.7,
        'line-dasharray': [3, 1.5],
       },
      'layout': {'visibility': 'visible'}
    },'road-label-small');


    map.addLayer({
       'id': 'stormLabels',
       'type': 'symbol',                                
       'source': 'storm',
       'source-layer': 'SBK2_STORM-40zbe5',
       'layout': {
         'visibility': 'visible',
         'symbol-placement': 'line',
         'text-field': 'STORM',
         'text-font': ['Open Sans Bold','Arial Unicode MS Regular'],
         'text-size': 12,
          },
       'paint': {
         'text-opacity': 0.75,
         'text-color': '#004AFD',
         'text-halo-color': 'rgb(250,250,250 )',
         'text-halo-width': 0.7
        }
    },'road-label-small');


});







map.addControl(new mapboxgl.NavigationControl(), 'top-right');
