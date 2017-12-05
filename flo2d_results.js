//jlgred88 account
mapboxgl.accessToken = 'pk.eyJ1IjoiamxncmVkODgiLCJhIjoiY2l0a2ZlZ3RhMGFyaTJubzNhaGF2emR4diJ9.H-hgfgmsmIoJoPNaWF5LKw';

//Dark Canvas
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/jlgred88/cjaqeu81ghbzf2slmk70f7cgc',

    zoom: 13,
    //minZoom:11,
   // maxZoom:19.5,
    hash: true,
    center: [-104.9739,39.7156],
});



//Create vectors for menu items
var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input'); 


//BaseMap Switch
function switchLayer(layer) {
    var layerId = layer.target.value;
    map.setStyle('mapbox://styles/jlgred88/' + layerId);
    $('.layer-off').prop('checked', false);
    $('.layer-on').prop('checked', true);
}
for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
} 




map.on('style.load', function () {



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//------------------------------------ADD SOURCE----------------------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


     
     map.addSource('boundary', {
        type: 'vector',
        url: 'mapbox://jlgred88.bqbabgst'    //flo2d_boundary-35iden   
    });
    
     map.addSource('boundaryCenter', {
        type: 'vector',
        url: 'mapbox://jlgred88.afbm8tty'    //flo2d_boundaryCentroid-1jgmwt 
    });

     map.addSource('inOutFlow', {
        type: 'vector',
        url: 'mapbox://jlgred88.6e8w4esr'   //flo2d_inOutFlow-043f46   
    });
    
     map.addSource('nVal', {
        type: 'vector',
        url: 'mapbox://jlgred88.66gn81xe'   //flo2d_Nval-8p5ttb   
    });
 
    map.addSource('levee', {
        type: 'vector',
        url: 'mapbox://jlgred88.0ucecm85'  // flo2d_levee-4icwae   
    });
 
    map.addSource('xs', {
        type: 'vector',
        url: 'mapbox://jlgred88.3m71f2nz'  // flo2d_floodplainXs-6rx1nt  
    });

    map.addSource('structures', {
        type: 'vector',
        url: 'mapbox://jlgred88.bzypits4'  //flo2d_buildingComplete-5zm9sw     
    });  

    map.addSource('parcel', {
        type: 'vector',
        url: 'mapbox://jlgred88.d1nzo9tc'  //flo2d_parcelClip-9omoj1 
    });

    map.addSource('parks', {
        type: 'vector',
        url: 'mapbox://jlgred88.deh3daxt'  //flo2d_parks-9byhit 
    });

    map.addSource('projectLimits', {
        type: 'vector',
        url: 'mapbox://jlgred88.1hs1s459'  //flo2d_StudyArea-2nw1t6
    });
  
    map.addSource('nhfl_xs', {
        type: 'vector',
        url: 'mapbox://jlgred88.axgrjd2p'  //flo2d_NHFL_XS_clipped-8b52gm
    });
  
    map.addSource('nhfl_wtrLn', {
        type: 'vector',
        url: 'mapbox://jlgred88.3gxc7lbk'  //flo2d_NHFL_WTR_LN_clipped-6af8kj
    });
  
    map.addSource('nhfl_hazLn', {
        type: 'vector',
        url: 'mapbox://jlgred88.9g4u01hs'  //flo2d_NHFL_HAZ_LN_clipped-68bu4o
    });
  
    map.addSource('nhfl_hazAr', {
        type: 'vector',
        url: 'mapbox://jlgred88.50nxnzub'  //flo2d_NHFL_HAZ_AR_clipped-didwlw
    });
  
    map.addSource('nhfl_genStruct', {
        type: 'vector',
        url: 'mapbox://jlgred88.6opsvabe'  //flo2d_NHFL_GEN_STRUCT_clipped-4gcuxp
    });
  
    map.addSource('nhfl_bfe', {
        type: 'vector',
        url: 'mapbox://jlgred88.1buki622'  //flo2d_NHFL_BFE_clipped-4h3l5i
    });
  




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//------------------------------------ADD BASE LAYER------------------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    map.addLayer({
      'id': 'parcel',
      'source': 'parcel',
      'source-layer': 'flo2d_parcelClip-9omoj1',
      'layout': {
        'visibility': 'none'
      },
      'type': 'line',
      'paint': {
        'line-color': '#E5CBFF',
        'line-width': {
            "stops": [[15, 0.7], [17, 1], [19, 1.7]]
        },
      }
  }, 'road-label-small');

    map.addLayer({
      'id': 'studyBoundaries',
      'source': 'projectLimits',
      'source-layer': 'flo2d_StudyArea-2nw1t6',
      'layout': {
        'visibility': 'visible'
      },
      'type': 'fill',
      'paint': {
        //'fill-outline-color': '#0F697F',
        'fill-color': '#eee',
        'fill-opacity': 0.2
      }
  }, 'road-label-small');

/*
    map.addLayer({
      'id': 'studyBoundaries',
      'source': 'boundary',
      'source-layer': 'flo2d_boundary-35iden',
      'layout': {
        'visibility': 'visible'
      },
      'type': 'fill',
      'paint': {
        //'fill-outline-color': '#0F697F',
        'fill-color': {
            property: 'Name',
            type: 'categorical',
            stops: [
              ['Broadway South', '#6a3d9a'],
              ['Broadway North', '#fdbf6f'],
              ['AHEC', '#33a02c'],
              ['Wash Park', '#e31a1c'],
              ['Colfax Central', '#fb9a99'],
              ['Sante Fe North', '#ff7f00'],
              ['Sante Fe South', '#a6cee3']  
              ]
            },
        'fill-opacity': 0.09
      }
  }, 'road-label-small');
  */

    map.addLayer({
      'id': 'studyBoundariesLine',
      'source': 'boundary',
      'source-layer': 'flo2d_boundary-35iden',
      'layout': {
        'visibility': 'visible'
      },
      'type': 'line',
      'paint': {
        'line-color': '#86D123',
        'line-dasharray': [6,3],
        'line-width': {
            "stops": [[15, 2], [17, 2.75], [19, 3]],
        },
        'line-opacity': 0.7
      }
  }, 'road-label-small');


  map.addLayer({
      'id': 'studyLabels',
      'type': 'symbol',
      'source': 'boundaryCenter',
      'source-layer': 'flo2d_boundaryCentroid-1jgmwt',      
      'layout': {
         "visibility": 'visible',
         "text-optional": true,
         "text-line-height": 1,
         "text-size": {
             "stops": [[15, 17], [17, 20]]
         },
         "text-field": "{Name}",
         'text-font': ['Arial Unicode MS Regular'],
         "text-allow-overlap": false,
         'symbol-placement': 'point'
     },
     "paint": {
       "text-color": "#F4988E",
       "text-halo-color": "#000", 
       "text-halo-width": {"stops": [[15,3],[17,4.5]]},
       "text-opacity":1
     }
  });


    map.addLayer({
      'id': 'parks',
      'source': 'parks',
      'source-layer': 'flo2d_parks-9byhit',
      'layout': {
        'visibility': 'none'
      },
      'type': 'fill',
      'paint': {
        'fill-outline-color': '#008232',
        'fill-color': '#008232',
        'fill-opacity': 0.9
      }
  }, 'road-label-small');


    map.addLayer({
      'id': 'structures',
      'source': 'structures',
      'source-layer': 'flo2d_buildingComplete-5zm9sw',
      'layout': {
        'visibility': 'none'
      },
      'type': 'fill',
      'paint': {
        'fill-outline-color': '#0F697F',
        'fill-color': '#0F697F'
      }
  }, 'road-label-small');


    map.addLayer({
      'id': '3d-buildings',
      'source': 'structures',
      'source-layer': 'flo2d_buildingComplete-5zm9sw',
      'type': 'fill-extrusion',
      'layout': {
        'visibility': 'none'
      },
      'paint': {
            'fill-extrusion-color': '#0F697F',
            'fill-extrusion-height': {'property': 'BLDG_HEIGH',
               'type': 'identity'},
            'fill-extrusion-opacity': 0.8
        }
    }, 'road-label-small');






//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//------------------------------------ADD FLO2D LAYER-----------------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    map.addLayer({
      'id': 'inflow',
      'source': 'inOutFlow',
      'source-layer': 'flo2d_inOutFlow-043f46',
      'filter': ["==", 'type', 'inflow'],
      'layout': {
        'visibility': 'none'
      },
      'type': 'circle',
      'paint': {
            "circle-radius":{
               "stops": [[12, 2], [15, 4], [17, 7.5]]
               }, 
            "circle-color": "#FFC71F",
            'circle-stroke-color': '#eee',
            'circle-stroke-width': {
               "stops": [[12, 1], [15, 2], [17, 4]]
               }, 
      }
  }, 'road-label-small');


    map.addLayer({
      'id': 'outflow',
      'source': 'inOutFlow',
      'source-layer': 'flo2d_inOutFlow-043f46',
      'filter': ["==", 'type', 'outflow'],
      'layout': {
        'visibility': 'none'
      },
      'type': 'circle',
      'paint': {
            "circle-radius":{
               "stops": [[12, 0.2], [15,2], [17, 3]]
               }, 
            "circle-color": "#00FFC5",
           // 'circle-stroke-color': '#eee',
           // 'circle-stroke-width': {
           //    "stops": [[12, 1.6], [15, 3], [17, 4.3]]
           //   }, 
      }
  }, 'road-label-small');



    map.addLayer({
      'id': 'levee',
      'source': 'levee',
      'source-layer': 'flo2d_levee-4icwae',
      'layout': {
        'visibility': 'none'
      },
      'type': 'line',
      'paint': {
        'line-color': '#FF4CB6',
        'line-width': {
            "stops": [[15, 2], [17, 3.7], [19, 4.5]]
        },
      }
  }, 'road-label-small');


    map.addLayer({
      'id': 'f2d_xs',
      'source': 'xs',
      'source-layer': 'flo2d_floodplainXs-6rx1nt',
      'layout': {
        'visibility': 'none'
      },
      'type': 'line',
      'paint': {
        'line-color': '#00A4FF',
        'line-width': {
            "stops": [[15, 1.7], [17, 3], [19, 4.5]]
        },
      }
  }, 'road-label-small');
 





//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//------------------------------------ADD NHFL LAYER-----------------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


    map.addLayer({
    id: 'fw',
    source: 'nhfl_hazAr',
    'source-layer': 'flo2d_NHFL_HAZ_AR_clipped-didwlw',
    type: 'fill',
    'filter': ['==', 'ZONE_SUBTY', 'FLOODWAY'],
    layout: {
        'visibility': 'none'
      },
    paint: {
        'fill-opacity': 0.5,
        'fill-color': '#F5DD12',
        'fill-outline-color': '#F5DD12'
    }
  }, 'road-label-small');



    map.addLayer({
    id: '500',
    source: 'nhfl_hazAr',
    'source-layer': 'flo2d_NHFL_HAZ_AR_clipped-didwlw',
    type: 'fill',
    'filter': ['==', 'ZONE_SUBTY', '0.2 PCT ANNUAL CHANCE FLOOD HAZARD'],
    layout: {
        'visibility': 'none'
      },
    paint: {
        'fill-opacity': 0.5,
        'fill-color': '#F56400',
        'fill-outline-color': '#F56400'
    }
  }, 'road-label-small');



    map.addLayer({
    id: 'stream',
    source: 'nhfl_wtrLn',
    'source-layer': 'flo2d_NHFL_WTR_LN_clipped-6af8kj',
    type: 'line',
    layout: {
        'visibility': 'none',
        'line-join': 'miter',
        'line-cap': 'butt'
      },
    paint: {
        'line-color': '#89DBF5',
        'line-width': {
              "stops": [[15, 1.3], [17, 2.5], [19, 4]]
        },

    }
  }, 'road-label-small');


  map.addLayer({
      'id': 'streamLabels',
      'type': 'symbol',
      'source': 'nhfl_wtrLn',
      'source-layer': 'flo2d_NHFL_WTR_LN_clipped-6af8kj',      
      'layout': {
         "visibility": 'none',
         "text-optional": true,
         "text-line-height": 1,
         "text-size": {
             "stops": [[15, 12], [17, 9]]
         },
         "text-field": "{WTR_NM}",
         'text-font': ['Open Sans Bold','Arial Unicode MS Regular', 'Roboto Light Italic'],
         "text-allow-overlap": false,
         'symbol-placement': 'line'
     },
     "paint": {
       "text-color": "#89DBF5",
       "text-halo-color": "#000", 
       "text-halo-width": {"stops": [[15,1.3],[17,3]]},
       "text-opacity":1
     }
  },'road-label-small');

});
map.addControl(new mapboxgl.NavigationControl(), 'top-right');
