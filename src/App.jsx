import './App.css';
import upiitaIcon from './images/upiitaIcon.png'
import IPN_LOGO from './images/IPN_LOGO.webp'
import Plot from 'react-plotly.js';

export function App() {

  // function unpack(rows, key) {
  //     return rows.map(function(row) { return row[key]; });
  // }

  // //------Obetner los valores maximos para el tamaño de la grafica    
  //         //x,y,z,xt,yt,zt
  // maxCol = [0,0,0,0,0,0];

  // for(var i=0;i<rows.length;i++){        
  //     if(maxCol[0] < Math.abs(rows[i]['x'])){
  //         maxCol[0] = Math.abs(rows[i]['x']);
  //     }
  //     if(maxCol[1] < Math.abs(rows[i]['y'])){
  //         maxCol[1] = Math.abs(rows[i]['y']);
  //     }
  //     if(maxCol[2] < Math.abs(rows[i]['z'])){
  //         maxCol[2] = Math.abs(rows[i]['z']);
  //     }
  //     if(maxCol[3] < Math.abs(rows[i]['xt'])){
  //         maxCol[3] = Math.abs(rows[i]['xt']);
  //     }
  //     if(maxCol[4] < Math.abs(rows[i]['yt'])){
  //         maxCol[4] = Math.abs(rows[i]['yt']);
  //     }
  //     if(maxCol[5] < Math.abs(rows[i]['zt'])){
  //         maxCol[5] = Math.abs(rows[i]['zt']);
  //     }
  // }

  // maxNumber = Math.max(maxCol[0], maxCol[1], maxCol[2], maxCol[3], maxCol[4], maxCol[5]);            

  // var space = maxNumber;
  // var grid = true;
  // var axesLine = false;

  // //------Definicion de los datos a graficar

  // var mapaDePuntos = {
  //     name: 'Mapa de puntos',
  //     x: unpack(rows, 'y'),
  //     y: unpack(rows, 'x'),
  //     z: unpack(rows, 'z'),
  //     mode: 'markers',
  //     type: 'scatter3d',
  //     marker: {
  //       color: 'rgb(255, 0, 0)',
  //       size: 0.5
  //     }
  // };

  // var mapaDePuntos1 = {
  //     name: 'Mapa de puntos',
  //     x: unpack(rows, 'y'),
  //     y: unpack(rows, 'x'),
  //     z: unpack(rows, 'z'),
  //     mode: 'markers',
  //     type: 'scatter3d',
  //     marker: {
  //       color: 'rgb(255, 0, 0)',
  //       size: 1
  //     },
  //     visible: false
  // };

  // var mapaDePuntos2 = {
  //     name: 'Mapa de puntos',
  //     x: unpack(rows, 'y'),
  //     y: unpack(rows, 'x'),
  //     z: unpack(rows, 'z'),
  //     mode: 'markers',
  //     type: 'scatter3d',
  //     marker: {
  //       color: 'rgb(255, 0, 0)',
  //       size: 1.5
  //     },
  //     visible: false
  // };

  // var trayectoria = {
  //     name: 'Trayectoria',
  //     x: unpack(rows, 'yt'),
  //     y: unpack(rows, 'xt'),
  //     z: unpack(rows, 'zt'),
  //     mode: 'lines',
  //     type: 'scatter3d',
  //     line: {
  //         color: 'rgb(10, 255, 10)',
  //         width: 5
  //     }
  // };

  // var xt = unpack(rows, 'xt');
  // var yt = unpack(rows, 'yt');
  // var zt = unpack(rows, 'zt');     

  // var startFrame = {
  //     name: 'Fotograma inicial',
  //     x: [yt[0]],
  //     y: [xt[0]],
  //     z: [zt[0]],
  //     mode: 'markers',
  //     type: 'scatter3d',
  //     marker: {
  //         color: 'rgb(0, 200, 0)',
  //         size: 11,
  //         symbol: 'square',
  //         line: {
  //             color: 'rgb(0, 255, 0)',
  //             width: 1
  //         },
  //         opacity: 0.7
  //     }
  // };

  // var nFrames = 0;
  // for (let index = 0; index < xt.length; index++) {
  //     if( xt[index] != ' ' ){
  //         nFrames += 1;
  //     }        
      
  // }       

  // var endFrame = {
  //     name: 'Fotograma final',
  //     x: [yt[nFrames-1]],
  //     y: [xt[nFrames-1]],
  //     z: [zt[nFrames-1]],
  //     mode: 'markers',
  //     type: 'scatter3d',
  //     marker: {
  //         color: 'rgb(255, 230, 0)',
  //         size: 11,
  //         symbol: 'square',
  //         line: {
  //             color: 'rgb(245, 220, 0)',
  //             width: 1
  //         },
  //         opacity: 0.7
  //     }
  // };

  // var frames = {
  //     name: 'Fotogramas clave',
  //     x: unpack(rows, 'yt'),
  //     y: unpack(rows, 'xt'),
  //     z: unpack(rows, 'zt'),
  //     mode: 'markers',
  //     type: 'scatter3d',
  //     marker: {
  //         color: 'rgb(0, 0, 255)',
  //         size: 11,
  //         symbol: 'square',
  //         line: {
  //             color: 'rgb(0, 0, 255)',
  //             width: 1
  //         },
  //         opacity: 0.1
  //     }
  // };

  // //------Creando arreglo de objetos a graficar
  // var data = [mapaDePuntos, mapaDePuntos1, mapaDePuntos2, trayectoria, frames, startFrame, endFrame];

  var space = 1;
  var grid = true;
  var axesLine = false;

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

  return (
    <div>
      <img className="ipnIcon" src={IPN_LOGO} alt='666'/>
      <img className="upiitaIcon" src={upiitaIcon} alt='upiitaIcon'/>
      <h1>
        <b>
          SLAM<br/>
          (Localización y mapeo simultaneo)
        </b>
      </h1>

      <h2><i>En la siguiente gráfica se muestra el mapa obtenido.</i></h2>

      <section>

        <nav>
          <div id='myDiv'>
            <Plot
              data={[
                {
                  x: [1, 2, 3],
                  y: [2, 6, 3],
                  type: 'scatter',
                  mode: 'lines+markers',
                  marker: {color: 'red'},
                },
                {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
              ]}
              layout={layout}
              config={config}
            />
          </div>
        </nav>

        <article>
          <h3><strong>Interacción con el mapa.</strong></h3>
          <ul style={{color: 'white', 'fontSize': '12px', 'fontFamily': 'Lucida Sans'}}>
            <li>Utilice el clic izquierdo del mouse para rotar el mapa.</li><br/>
            <li>Utilice el clic derecho del mouse para trasladar el mapa.</li><br/>
            <li>Utilice la rueda/scroll del mouse para hacer zoom.</li><br/>
            <li>Si el mapa se ha modificado, solo se necesita recargar la
              página para visualizar los cambios (puede tomar hasta 5 minutos).</li><br/>
            <li>En la parte derecha de la grafica puede mostrar u ocultar algún
              parámetro dando clic en el nombre del elemento.</li><br/>
            <li>En la parte inferior de la gráfica mapa puede modificar el tamaño de los puntos.</li><br/>
            <li>El mapa puede ser descargado como imagen en el menú superior derecho.</li><br/>
          </ul>

          <p>
            En el siguiente enlace puede consultar la base de datos utilizada para graficar.
          </p>
          <a style={{color: 'rgb(130, 247, 255)', 'fontSize': '12px',
          'fontFamily': 'Lucida Sans'}}
          href="https://github.com/AaronJuarezT/ORBSLAM2prueba/blob/main/mapAndTrajectory.csv">Base de datos en Github</a>

          <p>
            En el siguiente enlace puede consultar la herramienta utilizada para para graficar.
          </p>
          <a style={{color: 'rgb(130, 247, 255)', 'fontSize': '12px',
          'fontFamily': 'Lucida Sans'}}
          href="https://plotly.com/javascript/">Plotly</a>
        </article>
      </section>

      <p>
        Página realizada por los alumnos:<br/>
        Hernández Maya Diego Alfredo <br/>
        Juárez Terrazas Aarón<br/>
        Martínez González Luis Angel<br/>
      </p>

      <p style={{'textAlign': 'center', color: 'gray'}}>
        <br/>
        2021 Instituto Politecnico Nacional - UPIITA
      </p>
    </div>
  )
}


export default App;
