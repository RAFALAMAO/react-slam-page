Plotly.d3.csv('https://raw.githubusercontent.com/AaronJuarezT/ORBSLAM2prueba/main/mapAndTrajectory.csv', function(err, rows){
 
    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }
 
    //------Obetner los valores maximos para el tamaño de la grafica    
            //x,y,z,xt,yt,zt
    maxCol = [0,0,0,0,0,0];
 
    for(var i=0;i<rows.length;i++){        
        if(maxCol[0] < Math.abs(rows[i]['x'])){
            maxCol[0] = Math.abs(rows[i]['x']);
        }
        if(maxCol[1] < Math.abs(rows[i]['y'])){
            maxCol[1] = Math.abs(rows[i]['y']);
        }
        if(maxCol[2] < Math.abs(rows[i]['z'])){
            maxCol[2] = Math.abs(rows[i]['z']);
        }
        if(maxCol[3] < Math.abs(rows[i]['xt'])){
            maxCol[3] = Math.abs(rows[i]['xt']);
        }
        if(maxCol[4] < Math.abs(rows[i]['yt'])){
            maxCol[4] = Math.abs(rows[i]['yt']);
        }
        if(maxCol[5] < Math.abs(rows[i]['zt'])){
            maxCol[5] = Math.abs(rows[i]['zt']);
        }
    }
 
    maxNumber = Math.max(maxCol[0], maxCol[1], maxCol[2], maxCol[3], maxCol[4], maxCol[5]);            
 
    var space = maxNumber;
    var grid = true;
    var axesLine = false;
    
    //------Definicion de los datos a graficar
 
    var mapaDePuntos = {
        name: 'Mapa de puntos',
        x: unpack(rows, 'y'),
        y: unpack(rows, 'x'),
        z: unpack(rows, 'z'),
        mode: 'markers',
        type: 'scatter3d',
        marker: {
          color: 'rgb(255, 0, 0)',
          size: 0.5
        }
    };
 
    var mapaDePuntos1 = {
        name: 'Mapa de puntos',
        x: unpack(rows, 'y'),
        y: unpack(rows, 'x'),
        z: unpack(rows, 'z'),
        mode: 'markers',
        type: 'scatter3d',
        marker: {
          color: 'rgb(255, 0, 0)',
          size: 1
        },
        visible: false
    };
 
    var mapaDePuntos2 = {
        name: 'Mapa de puntos',
        x: unpack(rows, 'y'),
        y: unpack(rows, 'x'),
        z: unpack(rows, 'z'),
        mode: 'markers',
        type: 'scatter3d',
        marker: {
          color: 'rgb(255, 0, 0)',
          size: 1.5
        },
        visible: false
    };
 
    var trayectoria = {
        name: 'Trayectoria',
        x: unpack(rows, 'yt'),
        y: unpack(rows, 'xt'),
        z: unpack(rows, 'zt'),
        mode: 'lines',
        type: 'scatter3d',
        line: {
            color: 'rgb(10, 255, 10)',
            width: 5
        }
    };
 
    var xt = unpack(rows, 'xt');
    var yt = unpack(rows, 'yt');
    var zt = unpack(rows, 'zt');     
 
    var startFrame = {
        name: 'Fotograma inicial',
        x: [yt[0]],
        y: [xt[0]],
        z: [zt[0]],
        mode: 'markers',
        type: 'scatter3d',
        marker: {
            color: 'rgb(0, 200, 0)',
            size: 11,
            symbol: 'square',
            line: {
                color: 'rgb(0, 255, 0)',
                width: 1
            },
            opacity: 0.7
        }
    };
 
    var nFrames = 0;
    for (let index = 0; index < xt.length; index++) {
        if( xt[index] != ' ' ){
            nFrames += 1;
        }        
        
    }       
 
    var endFrame = {
        name: 'Fotograma final',
        x: [yt[nFrames-1]],
        y: [xt[nFrames-1]],
        z: [zt[nFrames-1]],
        mode: 'markers',
        type: 'scatter3d',
        marker: {
            color: 'rgb(255, 230, 0)',
            size: 11,
            symbol: 'square',
            line: {
                color: 'rgb(245, 220, 0)',
                width: 1
            },
            opacity: 0.7
        }
    };
    
    var frames = {
        name: 'Fotogramas clave',
        x: unpack(rows, 'yt'),
        y: unpack(rows, 'xt'),
        z: unpack(rows, 'zt'),
        mode: 'markers',
        type: 'scatter3d',
        marker: {
            color: 'rgb(0, 0, 255)',
            size: 11,
            symbol: 'square',
            line: {
                color: 'rgb(0, 0, 255)',
                width: 1
            },
            opacity: 0.1
        }
    };
 
    //------Creando arreglo de objetos a graficar
    var data = [mapaDePuntos, mapaDePuntos1, mapaDePuntos2, trayectoria, frames, startFrame, endFrame];
 
    //------Configuracipones de los ejes la grafica
    const axisOptions = {
        type: 'linear',
                zeroline: false,
                range: [-space, space],
                showgrid: grid,                
                showline: axesLine,
                gridcolor: 'rgb(30,30,30)',
                gridwidth: 2,
                zerolinecolor: '#969696',
                zerolinewidth: 4,
                linecolor: '#636363',
                linewidth: 6
    }
 
    //------Configuarciones del aspecto de la grafica
    var layout = {
        autosize: true,    
        dragmode: "orbit",
        title: 'Mapa obtenido',        
        font: {            
            color: 'rgb(255, 255, 255)'
        },
        paper_bgcolor: 'rgb(0, 0, 0)',                 
        showlegend: true,       
        height: 700,                
        margin: {
            l: 20,
            r: 50,
            b: 10,
            t: 50,
            pad: 1
        },
        scene: {
            aspectratio: {
                x: 1,
                y: 1,
                z: 1
            },
            camera: {
                center: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                eye: {
                    x: 0.4,
                    y: 0.4,
                    z: 0.4
                },
                up: {
                    x: 0,
                    y: 0,
                    z: 1
                }
            },
            xaxis: axisOptions,
            yaxis: axisOptions,
            zaxis: axisOptions
        },
        sliders: [{
                    pad: {t: 30,},
                    len: 0.2,
                    currentvalue: {
                      xanchor: 'middle',
                      x: 0,
                      y: 0,
                      prefix: 'Tamaño de puntos: ',
                      font: {                        
                        size: 10
                      }
                    },
                    steps: [{                       
                      label: 'min',
                      method: 'restyle',
                      args: ['visible', [true, false, false, true, true, true, true]]
                    }, {
                      label: 'med',
                      method: 'restyle',
                      args: ['visible', [false, true, false, true, true, true, true]]
                    }, {
                      label: 'max',
                      method: 'restyle',
                      args: ['visible', [false, false, true, true, true, true, true]]
                    }]
                }]
    };
 
    //------Configuarión para la adaptación de la graficar al tamaño de la ventana
    var config = {responsive: true}
 
    //------Graficación en myDiv
    Plotly.newPlot('myDiv', data, layout, config);
 
});


