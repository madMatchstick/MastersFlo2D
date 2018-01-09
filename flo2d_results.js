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
        url: 'mapbox://jlgred88.3w6q0kii'   //Flo2d_inOutFlow2-drrtds   
    });
    
     map.addSource('nVal', {
      type: 'geojson',
      "data": 'nval.geojson'

        //type: 'vector',
        //url: 'mapbox://jlgred88.66gn81xe'   //flo2d_Nval-8p5ttb   
    });
 
    map.addSource('levee', {
        type: 'vector',
        url: 'mapbox://jlgred88.0ucecm85'  // flo2d_levee-4icwae   
    });
 
    map.addSource('xs', {
        type: 'vector',
        url: 'mapbox://jlgred88.3m71f2nz'  // flo2d_floodplainXs-6rx1nt  
    });

    


     map.addSource('AOI', {
      type: 'geojson',
      "data": 'AOI_Merged.geojson'
    });    

     map.addSource('AOI_AHEC', {
        type: 'vector',
        url: 'mapbox://jlgred88.b5otynos'  //AOI_AHEC-1x73ow
    });
      

     map.addSource('depth_AHEC', {
      type: 'geojson',
      "data": 'depth_AHEC.geojson'
    });    

     map.addSource('depth_BN', {
      type: 'geojson',
      "data": 'depth_BroadwayNorth.geojson'
    });  

     map.addSource('depth_BS', {
      type: 'geojson',
      "data": 'depth_BroadwaySouth.geojson'
    });  

     map.addSource('depth_WP', {
      type: 'geojson',
      "data": 'depth_WashPark.geojson'
    }); 

     map.addSource('depth_CC', {
      type: 'geojson',
      "data": 'depth_ColfaxCentral.geojson'
    }); 

     map.addSource('depth_SS', {
      type: 'geojson',
      "data": 'depth_SanteFeSouth.geojson'
    }); 

     map.addSource('depth_SN', {
      type: 'geojson',
      "data": 'depth_SanteFeNorth.geojson'
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
  




     map.addSource('contours_WP', {
      type: 'geojson',
      "data": 'contour_WashPark.geojson'
    }); 

/*
     map.addSource('contour_CC', {
      type: 'geojson',
      "data": 'Colfax.geojson'
    }); 

     map.addSource('contour_SS', {
      type: 'geojson',
      "data": 'SoFe.geojson'
    }); 

     map.addSource('contour_SN', {
      type: 'geojson',
      "data": 'NoFe.geojson'
    }); 


       map.addSource('contour_BN', {
      type: 'geojson',
      "data": 'NoBo.geojson'
    }); 



       map.addSource('contour_BS', {
      type: 'geojson',
      "data": 'SoBo.geojson'
    }); 


       map.addSource('contour_AHEC', {
      type: 'geojson',
      "data": 'AHEC.geojson'
    }); 

*/
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//------------------------------------ADD BASE LAYER------------------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


  //1-ft
  map.addLayer({
      'id': 'contoursMinor_WP',
      'type': 'line',
      'source': 'contours_WP',
      'filter': ['==', 'Index', 1],
      'layout': {
          'line-join': 'round',
          'line-cap': 'round'
      },
      'paint': {
        'line-width': {
            "stops": [[15, 0], [17, 0.5], [19, 1]]
        },
        'line-opacity': 0,
        'line-color': '#bd925a'
      }
  },'road-label-small');
  

  //10ft
  map.addLayer({
      'id': 'contoursMajor_WP',
      'type': 'line',
      'source': 'contours_WP',
      'filter': ['all',['>', 'Index', 1]],
      'layout': {
        'line-join': 'round',
        'line-cap': 'round'
      },
      'paint': {
        'line-width': {
            "stops": [[15, 1], [17, 1.75], [19, 2.5]]
        },
        'line-opacity': 0,
        'line-color': '#bd925a',
      }
  },'road-label-small');
  


  map.addLayer({
      'id': '2ft_labels_WP',
      'type': 'symbol',
      'source': 'contours_WP',
      'filter': ['all',['>', 'Index', 1]],
      'layout': {
        'symbol-placement': 'line',
        'text-field': '{contour}',
        'text-font': ['Roboto Light Italic','Open Sans Light','Arial Unicode MS Regular'],
        'text-size': {
          "stops": [[15,9],[17,11],[19,13]]
        }
      },
      'paint': {
        'text-color': '#bd925a',
        'text-halo-color': '#F8F4F0',
        'text-halo-width': 0.5,
        'text-halo-blur': 0.5,
        'text-opacity': 0
      }
  },'road-label-small');









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
      'id': 'parcelpoly',
      'source': 'parcel',
      'source-layer': 'flo2d_parcelClip-9omoj1',
      'layout': {
        'visibility': 'none'
      },
      'type': 'fill',
      'paint': {
        'fill-color': '#E5CBFF',
        'fill-opacity': 0
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
        'fill-color': '#0F697F',
        'fill-opacity': 0,
      }
  }, 'road-label-small');








//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//------------------------------------ADD FLO2D LAYER-----------------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// WASH PARK

    map.addLayer({
      'id': 'studyBoundariesLine_WP',
      'source': 'boundary',
      'source-layer': 'flo2d_boundary-35iden',
      'filter': ["==", 'Name', 'Wash Park'],
      'layout': {
        'visibility': 'none'
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
      'id': 'studyBoundariesFill_WP',
      'source': 'boundary',
      'source-layer': 'flo2d_boundary-35iden',
      'filter': ["==", 'Name', 'Wash Park'],
      'layout': {
        'visibility': 'none'
      },
      'type': 'fill',
      'paint': {
        'fill-color': '#eee',
        'fill-opacity': 0.2
      },
  }, 'road-label-small');


    map.addLayer({
      'id': 'nVal_WP',
      'source': 'nVal',
      //'source-layer': 'flo2d_Nval-8p5ttb',
      'filter': ["==", 'Name', 'Wash Park'],
      'layout': {
        'visibility': 'none'
      },
      'type': 'fill',
      'paint': {
        'fill-color': {
            property: 'rnd_val',
            stops: [
              [0.031, '#ff73be'],
              [0.11, '#51e86e'],
              [0.151, '#ffed50'],
              [0.21, '#f46134'],
              [0.41, '#0085c9'] 
              ]
            },
        'fill-opacity': 0.7
      }
  }, 'road-label-small');



    map.addLayer({
      'id': 'inflow_WP',
      'source': 'inOutFlow',
      'source-layer': 'Flo2d_inOutFlow2-drrtds',
      'filter': ["all",["==", 'type', 'inflow'],["==", 'Name', 'Wash Park']],
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
      'id': 'outflow_WP',
      'source': 'inOutFlow',
      'source-layer': 'Flo2d_inOutFlow2-drrtds',
      'filter': ["all",["==", 'type', 'outflow'],["==", 'Name', 'Wash Park']],
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
      'id': 'AOI_WP',
      'type': 'line',
      'filter': ["==", 'Name', 'Wash Park'],
      'source': 'AOI',
      'layout': {
          'line-join': 'round',
          'line-cap': 'round',
          'visibility': 'none'
      },
      'paint': {
        'line-width': {
            "stops": [[15, 2], [17, 2.5], [19, 3.5]]
        },
        'line-color': '#FFB2AA'
      }
  },'road-label-small');


  map.addLayer({
      'id': 'flowDepth_WP',
      'type': 'fill',
      'source': 'depth_WP',
      'filter': ['>', 'Var', 0.25],
      'layout': {
          'visibility': 'none'
      },
      'paint': {
          'fill-color': {
              property: 'Var',
              type: 'interval',
              stops: [
                  [.25, '#8b0000'],
                  [.5, '#b81b34'],
                  [1, '#db4551'],
                  [1.5, '#f47461'],
                  [2, '#ffa474'],
                  [3, '#ffd59b'],
                  [4, '#FFFFC8']
                  ]
          },
          'fill-opacity': 0.6
      }
  }, 'road-label-small');













// Colfax 

    map.addLayer({
      'id': 'studyBoundariesLine_CC',
      'source': 'boundary',
      'source-layer': 'flo2d_boundary-35iden',
      'filter': ["==", 'Name', 'Colfax Central'],
      'layout': {
        'visibility': 'none'
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
      'id': 'studyBoundariesFill_CC',
      'source': 'boundary',
      'source-layer': 'flo2d_boundary-35iden',
      'filter': ["==", 'Name', 'Colfax Central'],
      'layout': {
        'visibility': 'none'
      },
      'type': 'fill',
      'paint': {
        'fill-color': '#eee',
        'fill-opacity': 0.2
      }
  }, 'road-label-small');




    map.addLayer({
      'id': 'nVal_CC',
      'source': 'nVal',
      //'source-layer': 'flo2d_Nval-8p5ttb',
      'filter': ["==", 'Name', 'Colfax Central'],
      'layout': {
        'visibility': 'none'
      },
      'type': 'fill',
      'paint': {
        'fill-color': {
            property: 'rnd_val',
            stops: [
              [0.031, '#ff73be'],
              [0.11, '#51e86e'],
              [0.151, '#ffed50'],
              [0.21, '#f46134'],
              [0.41, '#0085c9'] 
              ]
            },
        'fill-opacity': 0.7
      }
  }, 'road-label-small');



    map.addLayer({
      'id': 'inflow_CC',
      'source': 'inOutFlow',
      'source-layer': 'Flo2d_inOutFlow2-drrtds',
      'filter': ["all",["==", 'type', 'inflow'],["==", 'Name', 'Colfax Central']],
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
      'id': 'outflow_CC',
      'source': 'inOutFlow',
      'source-layer': 'Flo2d_inOutFlow2-drrtds',
      'filter': ["all",["==", 'type', 'outflow'],["==", 'Name', 'Colfax Central']],
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
      'id': 'AOI_CC',
      'type': 'line',
      'filter': ["==", 'Name', 'Colfax Central'],
      'source': 'AOI',
      'layout': {
          'line-join': 'round',
          'line-cap': 'round',
          'visibility': 'none'
      },
      'paint': {
        'line-width': {
            "stops": [[15, 2], [17, 2.5], [19, 3.5]]
        },
        'line-color': '#FFB2AA'
      }
  },'road-label-small');


  map.addLayer({
      'id': 'flowDepth_CC',
      'type': 'fill',
      'source': 'depth_CC',
      'filter': ['>', 'Var', 0.25],
      'layout': {
          'visibility': 'none'
      },
      'paint': {
          'fill-color': {
              property: 'Var',
              type: 'interval',
              stops: [
                  [.25, '#8b0000'],
                  [.5, '#b81b34'],
                  [1, '#db4551'],
                  [1.5, '#f47461'],
                  [2, '#ffa474'],
                  [3, '#ffd59b'],
                  [4, '#FFFFC8']
                  ]
          },
          'fill-opacity': 0.6
      }
  }, 'road-label-small');





// Sante Fe South


      map.addLayer({
      'id': 'studyBoundariesLine_SS',
      'source': 'boundary',
      'source-layer': 'flo2d_boundary-35iden',
      'filter': ["==", 'Name', 'Sante Fe South'],
      'layout': {
        'visibility': 'none'
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
      'id': 'studyBoundariesFill_SS',
      'source': 'boundary',
      'source-layer': 'flo2d_boundary-35iden',
      'filter': ["==", 'Name', 'Sante Fe South'],
      'layout': {
        'visibility': 'none'
      },
      'type': 'fill',
      'paint': {
        'fill-color': '#eee',
        'fill-opacity': 0.2
      }
  }, 'road-label-small');

    map.addLayer({
      'id': 'nVal_SS',
      'source': 'nVal',
      //'source-layer': 'flo2d_Nval-8p5ttb',
      'filter': ["==", 'Name', 'Sante Fe South'],
      'layout': {
        'visibility': 'none'
      },
      'type': 'fill',
      'paint': {
        'fill-color': {
            property: 'rnd_val',
            stops: [
              [0.031, '#ff73be'],
              [0.11, '#51e86e'],
              [0.151, '#ffed50'],
              [0.21, '#f46134'],
              [0.41, '#0085c9'] 
              ]
            },
        'fill-opacity': 0.7
      }
  }, 'road-label-small');



    map.addLayer({
      'id': 'inflow_SS',
      'source': 'inOutFlow',
      'source-layer': 'Flo2d_inOutFlow2-drrtds',
      'filter': ["all",["==", 'type', 'inflow'],["==", 'Name', 'Sante Fe South']],
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
      'id': 'outflow_SS',
      'source': 'inOutFlow',
      'source-layer': 'Flo2d_inOutFlow2-drrtds',
      'filter': ["all",["==", 'type', 'outflow'],["==", 'Name', 'Sante Fe South']],
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
      'id': 'AOI_SS',
      'type': 'line',
      'filter': ["==", 'Name', 'Sante Fe South'],
      'source': 'AOI',
      'layout': {
          'line-join': 'round',
          'line-cap': 'round',
          'visibility': 'none'
      },
      'paint': {
        'line-width': {
            "stops": [[15, 2], [17, 2.5], [19, 3.5]]
        },
        'line-color': '#FFB2AA'
      }
  },'road-label-small');



  map.addLayer({
      'id': 'flowDepth_SS',
      'type': 'fill',
      'source': 'depth_SS',
      'filter': ['>', 'Var', 0.25],
      'layout': {
          'visibility': 'none'
      },
      'paint': {
          'fill-color': {
              property: 'Var',
              type: 'interval',
              stops: [
                  [.25, '#8b0000'],
                  [.5, '#b81b34'],
                  [1, '#db4551'],
                  [1.5, '#f47461'],
                  [2, '#ffa474'],
                  [3, '#ffd59b'],
                  [4, '#FFFFC8']
                  ]
          },
          'fill-opacity': 0.6
      }
  }, 'road-label-small');







// Sante Fe North
    map.addLayer({
      'id': 'studyBoundariesLine_SN',
      'source': 'boundary',
      'source-layer': 'flo2d_boundary-35iden',
      'filter': ["==", 'Name', 'Sante Fe North'],
      'layout': {
        'visibility': 'none'
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
      'id': 'studyBoundariesFill_SN',
      'source': 'boundary',
      'source-layer': 'flo2d_boundary-35iden',
      'filter': ["==", 'Name', 'Sante Fe North'],
      'layout': {
        'visibility': 'none'
      },
      'type': 'fill',
      'paint': {
        'fill-color': '#eee',
        'fill-opacity': 0.2
      }
  }, 'road-label-small');


    map.addLayer({
      'id': 'nVal_SN',
      'source': 'nVal',
      //'source-layer': 'flo2d_Nval-8p5ttb',
      'filter': ["==", 'Name', 'Sante Fe North'],
      'layout': {
        'visibility': 'none'
      },
      'type': 'fill',
      'paint': {
        'fill-color': {
            property: 'rnd_val',
            stops: [
              [0.031, '#ff73be'],
              [0.11, '#51e86e'],
              [0.151, '#ffed50'],
              [0.21, '#f46134'],
              [0.41, '#0085c9'] 
              ]
            },
        'fill-opacity': 0.7
      }
  }, 'road-label-small');



    map.addLayer({
      'id': 'inflow_SN',
      'source': 'inOutFlow',
      'source-layer': 'Flo2d_inOutFlow2-drrtds',
      'filter': ["all",["==", 'type', 'inflow'],["==", 'Name', 'Sante Fe North']],
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
      'id': 'outflow_SN',
      'source': 'inOutFlow',
      'source-layer': 'Flo2d_inOutFlow2-drrtds',
      'filter': ["all",["==", 'type', 'outflow'],["==", 'Name', 'Sante Fe North']],
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
      'id': 'AOI_SN',
      'type': 'line',
      'filter': ["==", 'Name', 'Sante Fe North'],
      'source': 'AOI',
      'layout': {
          'line-join': 'round',
          'line-cap': 'round',
          'visibility': 'none'
      },
      'paint': {
        'line-width': {
            "stops": [[15, 2], [17, 2.5], [19, 3.5]]
        },
        'line-color': '#FFB2AA'
      }
  },'road-label-small');


  map.addLayer({
      'id': 'flowDepth_SN',
      'type': 'fill',
      'source': 'depth_SN',
      'filter': ['>', 'Var', 0.25],
      'layout': {
          'visibility': 'none'
      },
      'paint': {
          'fill-color': {
              property: 'Var',
              type: 'interval',
              stops: [
                  [.25, '#8b0000'],
                  [.5, '#b81b34'],
                  [1, '#db4551'],
                  [1.5, '#f47461'],
                  [2, '#ffa474'],
                  [3, '#ffd59b'],
                  [4, '#FFFFC8']
                  ]
          },
          'fill-opacity': 0.6
      }
  }, 'road-label-small');








// Broadway North
    map.addLayer({
      'id': 'studyBoundariesLine_BN',
      'source': 'boundary',
      'source-layer': 'flo2d_boundary-35iden',
      'filter': ["==", 'Name', 'Broadway North'],
      'layout': {
        'visibility': 'none'
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
      'id': 'studyBoundariesFill_BN',
      'source': 'boundary',
      'source-layer': 'flo2d_boundary-35iden',
      'filter': ["==", 'Name', 'Broadway North'],
      'layout': {
        'visibility': 'none'
      },
      'type': 'fill',
      'paint': {
        'fill-color': '#eee',
        'fill-opacity': 0.2
      }
  }, 'road-label-small');


    map.addLayer({
      'id': 'nVal_BN',
      'source': 'nVal',
      //'source-layer': 'flo2d_Nval-8p5ttb',
      'filter': ["==", 'Name', 'Broadway North'],
      'layout': {
        'visibility': 'none'
      },
      'type': 'fill',
      'paint': {
        'fill-color': {
            property: 'rnd_val',
            stops: [
              [0.031, '#ff73be'],
              [0.11, '#51e86e'],
              [0.151, '#ffed50'],
              [0.21, '#f46134'],
              [0.41, '#0085c9'] 
              ]
            },
        'fill-opacity': 0.7
      }
  }, 'road-label-small');



    map.addLayer({
      'id': 'inflow_BN',
      'source': 'inOutFlow',
      'source-layer': 'Flo2d_inOutFlow2-drrtds',
      'filter': ["all",["==", 'type', 'inflow'],["==", 'Name', 'Broadway North']],
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
      'id': 'outflow_BN',
      'source': 'inOutFlow',
      'source-layer': 'Flo2d_inOutFlow2-drrtds',
      'filter': ["all",["==", 'type', 'outflow'],["==", 'Name', 'Broadway North']],
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
      'id': 'AOI_BN',
      'type': 'line',
      'filter': ["==", 'Name', 'Broadway North'],
      'source': 'AOI',
      'layout': {
          'line-join': 'round',
          'line-cap': 'round',
          'visibility': 'none'
      },
      'paint': {
        'line-width': {
            "stops": [[15, 2], [17, 2.5], [19, 3.5]]
        },
        'line-color': '#FFB2AA'
      }
  },'road-label-small');


  map.addLayer({
      'id': 'flowDepth_BN',
      'type': 'fill',
      'source': 'depth_BN',
      'filter': ['>', 'Var', 0.25],
      'layout': {
          'visibility': 'none'
      },
      'paint': {
          'fill-color': {
              property: 'Var',
              type: 'interval',
              stops: [
                  [.25, '#8b0000'],
                  [.5, '#b81b34'],
                  [1, '#db4551'],
                  [1.5, '#f47461'],
                  [2, '#ffa474'],
                  [3, '#ffd59b'],
                  [4, '#FFFFC8']
                  ]
          },
          'fill-opacity': 0.6
      }
  }, 'road-label-small');








// Broadway South
    map.addLayer({
      'id': 'studyBoundariesLine_BS',
      'source': 'boundary',
      'source-layer': 'flo2d_boundary-35iden',
      'filter': ["==", 'Name', 'Broadway South'],
      'layout': {
        'visibility': 'none'
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
      'id': 'studyBoundariesFill_BS',
      'source': 'boundary',
      'source-layer': 'flo2d_boundary-35iden',
      'filter': ["==", 'Name', 'Broadway South'],
      'layout': {
        'visibility': 'none'
      },
      'type': 'fill',
      'paint': {
        'fill-color': '#eee',
        'fill-opacity': 0.2
      }
  }, 'road-label-small');


    map.addLayer({
      'id': 'nVal_BS',
      'source': 'nVal',
      //'source-layer': 'flo2d_Nval-8p5ttb',
      'filter': ["==", 'Name', 'Broadway South'],
      'layout': {
        'visibility': 'none'
      },
      'type': 'fill',
      'paint': {
        'fill-color': {
            property: 'rnd_val',
            stops: [
              [0.031, '#ff73be'],
              [0.11, '#51e86e'],
              [0.151, '#ffed50'],
              [0.21, '#f46134'],
              [0.41, '#0085c9'] 
              ]
            },
        'fill-opacity': 0.7
      }
  }, 'road-label-small');



    map.addLayer({
      'id': 'inflow_BS',
      'source': 'inOutFlow',
      'source-layer': 'Flo2d_inOutFlow2-drrtds',
      'filter': ["all",["==", 'type', 'inflow'],["==", 'Name', 'Broadway South']],
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
      'id': 'outflow_BS',
      'source': 'inOutFlow',
      'source-layer': 'Flo2d_inOutFlow2-drrtds',
      'filter': ["all",["==", 'type', 'outflow'],["==", 'Name', 'Broadway South']],
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
      'id': 'AOI_BS',
      'type': 'line',
      'filter': ["==", 'Name', 'Broadway South'],
      'source': 'AOI',
      'layout': {
          'line-join': 'round',
          'line-cap': 'round',
          'visibility': 'none'
      },
      'paint': {
        'line-width': {
            "stops": [[15, 2], [17, 2.5], [19, 3.5]]
        },
        'line-color': '#FFB2AA'
      }
  },'road-label-small');



  map.addLayer({
      'id': 'flowDepth_BS',
      'type': 'fill',
      'source': 'depth_BS',
      'filter': ['>', 'Var', 0.25],
      'layout': {
          'visibility': 'none'
      },
      'paint': {
          'fill-color': {
              property: 'Var',
              type: 'interval',
              stops: [
                  [.25, '#8b0000'],
                  [.5, '#b81b34'],
                  [1, '#db4551'],
                  [1.5, '#f47461'],
                  [2, '#ffa474'],
                  [3, '#ffd59b'],
                  [4, '#FFFFC8']
                  ]
          },
          'fill-opacity': 0.6
      }
  }, 'road-label-small');







// AHEC
    map.addLayer({
      'id': 'studyBoundariesLine_AHEC',
      'source': 'boundary',
      'source-layer': 'flo2d_boundary-35iden',
      'filter': ["==", 'Name', 'AHEC'],
      'layout': {
        'visibility': 'none'
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
      'id': 'studyBoundariesFill_AHEC',
      'source': 'boundary',
      'source-layer': 'flo2d_boundary-35iden',
      'filter': ["==", 'Name', 'AHEC'],
      'layout': {
        'visibility': 'none'
      },
      'type': 'fill',
      'paint': {
        'fill-color': '#eee',
        'fill-opacity': 0.2
      }
  }, 'road-label-small');


    map.addLayer({
      'id': 'nVal_AHEC',
      'source': 'nVal',
      //'source-layer': 'flo2d_Nval-8p5ttb',
      'filter': ["==", 'Name', 'AHEC'],
      'layout': {
        'visibility': 'none'
      },
      'type': 'fill',
      'paint': {
        'fill-color': {
            property: 'rnd_val',
            stops: [
              [0.031, '#ff73be'],
              [0.11, '#51e86e'],
              [0.151, '#ffed50'],
              [0.21, '#f46134'],
              [0.41, '#0085c9'] 
              ]
            },
        'fill-opacity': 0.7
      }
  }, 'road-label-small');



    map.addLayer({
      'id': 'inflow_AHEC',
      'source': 'inOutFlow',
      'source-layer': 'Flo2d_inOutFlow2-drrtds',
      'filter': ["all",["==", 'type', 'inflow'],["==", 'Name', 'AHEC']],
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
      'id': 'outflow_AHEC',
      'source': 'inOutFlow',
      'source-layer': 'Flo2d_inOutFlow2-drrtds',
      'filter': ["all",["==", 'type', 'outflow'],["==", 'Name', 'AHEC']],
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
 



  map.addLayer({
      'id': 'AOI_AHEC',
      'type': 'line',
      'source': 'AOI_AHEC',
      'source-layer': 'AOI_AHEC-1x73ow',
      'layout': {
          'line-join': 'round',
          'line-cap': 'round',
          'visibility': 'none'
      },
      'paint': {
        'line-width': {
            "stops": [[15, 2], [17, 2.5], [19, 3.5]]
        },
        'line-color': '#FFB2AA'
      }
  },'road-label-small');



  map.addLayer({
      'id': 'flowDepth_AHEC',
      'type': 'fill',
      'source': 'depth_AHEC',
      'filter': ['>', 'Var', 0.25],
      'layout': {
          'visibility': 'none'
      },
      'paint': {
          'fill-color': {
              property: 'Var',
              type: 'interval',
              stops: [
                  [.25, '#8b0000'],
                  [.5, '#b81b34'],
                  [1, '#db4551'],
                  [1.5, '#f47461'],
                  [2, '#ffa474'],
                  [3, '#ffd59b'],
                  [4, '#FFFFC8']
                  ]
          },
          'fill-opacity': 0.6
      }
  }, 'road-label-small');










//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//------------------------------------ADD NHFL LAYER-----------------------------
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

    map.addLayer({
    id: 'genStruct',
    source: 'nhfl_genStruct',
    'source-layer': 'flo2d_NHFL_GEN_STRUCT_clipped-4gcuxp',
    type: 'line',
    layout: {
        'visibility': 'none',
        'line-join': 'miter',
        'line-cap': 'butt'
      },
    paint: {
        'line-color': '#D6D6D6',
        'line-width': {
              "stops": [[15, 2], [17, 3.5], [19, 5.5]]
        },

    }
  }, 'road-label-small');


  map.addLayer({
      'id': 'structLabels',
      'type': 'symbol',
      'source': 'nhfl_genStruct',
      'source-layer': 'flo2d_NHFL_GEN_STRUCT_clipped-4gcuxp',      
      'layout': {
         "visibility": 'none',
         "text-optional": false,
         "text-line-height": 1,
         "text-size": {
             "stops": [[15, 15], [17, 11]]
         },
         "text-field": "{STRUCT_TYP}",
         'text-font': ['Open Sans Bold','Arial Unicode MS Regular', 'Roboto Light Italic'],
         "text-allow-overlap": false,
         'symbol-placement': 'line'
     },
     "paint": {
       "text-color": "#eee",
       "text-halo-color": "#000", 
       "text-halo-width": {"stops": [[15,1.3],[17,3]]},
       "text-opacity":1
     }

       }, 'road-label-small');

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
        'fill-opacity': 0.65,
        'fill-color': '#E6E659',
        'fill-outline-color': '#E6E659'
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
        'fill-opacity': 0.65,
        'fill-color': '#69D6DC',
        'fill-outline-color': '#69D6DC'
    }
  }, 'road-label-small');


    map.addLayer({
    id: '100',
    source: 'nhfl_hazAr',
    'source-layer': 'flo2d_NHFL_HAZ_AR_clipped-didwlw',
    type: 'fill',
    'filter': ["all",['==', 'ZONE_SUBTY', '']],
    layout: {
        'visibility': 'none'
      },
    paint: {
        'fill-opacity': 0.65,
        'fill-color': '#95ED72',
        'fill-outline-color': '#95ED72'
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
        'line-color': '#F4F200',
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
       "text-color": "#F4F200",
       "text-halo-color": "#000", 
       "text-halo-width": {"stops": [[15,1.3],[17,3]]},
       "text-opacity":1
     }
  },'road-label-small');



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
            'fill-extrusion-opacity': 0
        }
    }, 'road-label-small');



});





//Radio Button for building
var dimList = document.getElementById('dimSwitch');
var dimRadio = dimList.getElementsByTagName('input');

function switchDim() {
  var value = document.querySelector('input[name="switchDim"]:checked').value;
      if (value == '3d'){
        map.setLayoutProperty('3d-buildings','visibility', 'visible');
        map.setLayoutProperty('structures','visibility', 'none');
      }
      else if (value == '2d'){
        map.setLayoutProperty('3d-buildings','visibility', 'none');
        map.setLayoutProperty('structures','visibility', 'visible');
      }
      else {};

}

for (var i = 0; i < dimRadio.length; i++) {
    dimRadio[i].onclick = switchDim;
}


//Radio Button for Affected Struct
/*var dimList2 = document.getElementById('dimSwitch2');
var dimradio2 = dimList2.getElementsByTagName('input');

function switchDim2() {
  var value = document.querySelector('input[name="switchDim2"]:checked').value;
      if (value == '3d2'){
        map.setLayoutProperty('3d-buildings_aff','visibility', 'visible');
        map.setLayoutProperty('structures_aff','visibility', 'none');
      }
      else if (value == '2d2'){
        map.setLayoutProperty('3d-buildings_aff','visibility', 'none');
        map.setLayoutProperty('structures_aff','visibility', 'visible');
      }
      else {};

}

for (var i = 0; i < dimRadio2.length; i++) {
    dimRadio2[i].onclick = switchDim2
}
*/


/*

//checkbox
var studyList = document.getElementById('study');
var studyRadio = studyList.getElementsByTagName('input');

function switchStudy() {
    
$(document).ready(function(){
        $('input[type="checkbox"]').click(function(){
            if($(this).prop("checked") == true){
                var value = document.querySelector('input[name="studyMenu"]:checked').value;
                var id = document.querySelector('input[name="studyMenu"]:checked').id

                          if (id== 'inflow'){
                            map.setLayoutProperty('inflow', 'visibility', 'visible'); 
                            map.setFilter('inflow', ['==', 'Name', value])
                            }
                          else if (id == 'outflow'){
                            map.setLayoutProperty('outflow', 'visibility', 'visible');  
                            map.setFilter('outflow', ['==', 'Name', value])
                            } 
                          else if (id == 'nVal')
                            { toggleLayer('nVal'); 
                            map.setFilter('nVal', ['==', 'Name', value])
                            } 
                          else if (id == 'affectStruct')
                            { toggleLayer('affectStruct'); 
                            map.setFilter('affectStruct', ['==', 'Name', value])
                            } 
                          else if (id == 'depth')
                            { toggleLayer('depth'); 
                            map.setFilter('depth', ['==', 'Name', value])
                            } 
                          else if (id == 'boundaryIndivid')
                            { toggleLayer('boundaryIndivid'); 
                            map.setFilter('boundaryIndivid', ['==', 'Name', value])
                            } 

                      
                }
            
              else if($(this).prop("checked") == false){

                          if (id== 'inflow'){
                            map.setLayoutProperty('inflow', 'visibility', 'none'); 
                            }
                          else if (id == 'outflow'){
                            map.setLayoutProperty('outflow', 'visibility', 'none');  
                            } 
                          else if (id == 'nVal')
                            { toggleLayer('nVal'); 
                            } 
                          else if (id == 'affectStruct')
                            { toggleLayer('affectStruct'); 
                            map.setFilter('affectStruct', ['==', 'Name', value])
                            } 
                          else if (id == 'depth')
                            { toggleLayer('depth'); 
                            map.setFilter('depth', ['==', 'Name', value])
                            } 
                          else if (id == 'boundaryIndivid')
                            { toggleLayer('boundaryIndivid'); 
                            map.setFilter('boundaryIndivid', ['==', 'Name', value])
                            } 
                

            }
        });
    });

   


}

for (var s = 0; s < studyRadio.length; s++) {
    studyRadio[s].onclick = switchStudy;
}



*/



    map.on('click', function(e) {
        
       var featureList = map.queryRenderedFeatures(e.point, { layers: ['parcelpoly'] });
          if (!featureList.length) {
          return;
          }

      var feature = featureList[0];
      var id = feature.layer.id;


     if (id == 'parcelpoly'){
        var popup = new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML('<b>'+'ADDRESS: ' + '</b>' + feature.properties.SITUS_AD_1 + ' '+ feature.properties.SITUS_ZIP + '<br/>' +
                     '<b>'+'CLASSIFICATION: ' + '</b>' + feature.properties.D_CLASS_CN + '<br/>' +
                     '<b>'+'OWNER: ' + '</b>'+  feature.properties.OWNER_NAME)
            .addTo(map);
          };


    });

    map.on('mousemove', function (e) {
    var featureList = map.queryRenderedFeatures(e.point, { layers: ['parcelpoly'] });
    map.getCanvas().style.cursor = (featureList.length) ? 'pointer' : '';
    });

        



document.getElementById('AHEC_Zoom').addEventListener('click', function() {

  var bbox = [[-105.013,39.7369 ], [-104.998,39.7486]]; 
  map.fitBounds(bbox, { padding:10 }); 

});

document.getElementById('Colfax_Zoom').addEventListener('click', function() {

  var bbox = [[-105,39.7256], [-104.98,39.7431]];  
  map.fitBounds(bbox, { padding:10 });

});

document.getElementById('SoBo_Zoom').addEventListener('click', function() {

  var bbox = [[-105.002,39.6974], [-104.979,39.717]];
  map.fitBounds(bbox, { padding:10 });

});

document.getElementById('NoBo_Zoom').addEventListener('click', function() {

  var bbox = [[-104.992,39.7106], [-104.979,39.7282]]; 
  map.fitBounds(bbox, { padding:10 });

});


document.getElementById('NoFe_Zoom').addEventListener('click', function() {

  var bbox = [[-105.009,39.7264], [-104.989,39.744]];
  map.fitBounds(bbox, { padding:10 }); 

});


document.getElementById('SoFe_Zoom').addEventListener('click', function() {

  var bbox = [[-105.006,39.7157], [-104.988,39.7295]]; 
  map.fitBounds(bbox, { padding:10 });

});


document.getElementById('Washpark_Zoom').addEventListener('click', function() {

  var bbox = [[-104.978,39.6925], [-104.964,39.7107]]; 
  map.fitBounds(bbox, { padding:10 });

});


map.addControl(new mapboxgl.NavigationControl(), 'top-right');
