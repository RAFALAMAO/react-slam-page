function formatRaw (rows, key) {
    return rows.map(function (data) {
        if (!isNaN(parseFloat(data[key]))) {
          return parseFloat(data[key]);
        } else {
          return null;
        }
    })
}

export function formatData(rows) {
  // Calcular el valor mas grande de todos
  var maxCol = [0, 0, 0, 0, 0, 0];

  for (var i = 0; i < rows.length; i++) {
    maxCol[0] = maxCol[0] < Math.abs(rows[i]["x"]) ? Math.abs(rows[i]["x"]) : maxCol[0];
    maxCol[1] = maxCol[1] < Math.abs(rows[i]["y"]) ? Math.abs(rows[i]["y"]) : maxCol[1];
    maxCol[2] = maxCol[2] < Math.abs(rows[i]["z"]) ? Math.abs(rows[i]["z"]) : maxCol[2];
    maxCol[3] = maxCol[3] < Math.abs(rows[i]["xt"]) ? Math.abs(rows[i]["xt"]) : maxCol[3];
    maxCol[4] = maxCol[4] < Math.abs(rows[i]["yt"]) ? Math.abs(rows[i]["yt"]) : maxCol[4];
    maxCol[5] = maxCol[5] < Math.abs(rows[i]["zt"]) ? Math.abs(rows[i]["zt"]) : maxCol[5];
  }

  const maxNumber = Math.max(
    maxCol[0],
    maxCol[1],
    maxCol[2],
    maxCol[3],
    maxCol[4],
    maxCol[5]
  );

  const space = maxNumber;
  const grid = true;
  const axesLine = false;

  const mapaDePuntos = {
    name: "Cloud map",
    x: formatRaw(rows, 'y'),
    y: formatRaw(rows, 'x'),
    z: formatRaw(rows, 'z'),
    mode: "markers",
    type: "scatter3d",
    marker: {
      color: "rgb(255, 0, 0)",
      size: 0.5,
    },
    visible: true
  };

  const mapaDePuntosMediano = {
    name: "Cloud map",
    x: mapaDePuntos.x,
    y: mapaDePuntos.y,
    z: mapaDePuntos.z,
    mode: "markers",
    type: "scatter3d",
    marker: {
      color: "rgb(255, 0, 0)",
      size: 1,
    },
    visible: false,
  };

  const mapaDePuntosGrande = {
    name: "Cloud map",
    x: mapaDePuntos.x,
    y: mapaDePuntos.y,
    z: mapaDePuntos.z,
    mode: "markers",
    type: "scatter3d",
    marker: {
      color: "rgb(255, 0, 0)",
      size: 1.5,
    },
    visible: false,
  };

  const trayectoria = {
    name: "Trayectory",
    x: formatRaw(rows, 'yt'),
    y: formatRaw(rows, 'xt'),
    z: formatRaw(rows, 'zt'),
    mode: "lines",
    type: "scatter3d",
    line: {
      color: "rgb(10, 255, 10)",
      width: 5,
    },
  };

  const startFrame = {
    name: "Start frame",
    x: [trayectoria.y[0]],
    y: [trayectoria.x[0]],
    z: [trayectoria.z[0]],
    mode: "markers",
    type: "scatter3d",
    marker: {
      color: "rgb(0, 200, 0)",
      size: 11,
      symbol: "square",
      line: {
        color: "rgb(0, 255, 0)",
        width: 1,
      },
      opacity: 0.7,
    },
  };

  var nFrames = 0;
  for (let index = 0; index < trayectoria.x.length; index++) {
    if (trayectoria.x[index] !== null) {
      nFrames += 1;
    }
  }

  const endFrame = {
    name: "End frame",
    x: [trayectoria.y[nFrames - 1]],
    y: [trayectoria.x[nFrames - 1]],
    z: [trayectoria.z[nFrames - 1]],
    mode: "markers",
    type: "scatter3d",
    marker: {
      color: "rgb(255, 230, 0)",
      size: 11,
      symbol: "square",
      line: {
        color: "rgb(245, 220, 0)",
        width: 1,
      },
      opacity: 0.7,
    },
  };

  const frames = {
    name: "Key Frames",
    x: trayectoria.x,
    y: trayectoria.y,
    z: trayectoria.z,
    mode: "markers",
    type: "scatter3d",
    marker: {
      color: "rgb(0, 0, 255)",
      size: 11,
      symbol: "square",
      line: {
        color: "rgb(0, 0, 255)",
        width: 1,
      },
      opacity: 0.1,
    },
  };

  //------Configuracipones de los ejes la grafica
  const axisOptions = {
    type: "linear",
    zeroline: false,
    range: [-space, space],
    showgrid: grid,
    showline: axesLine,
    gridcolor: "rgb(30,30,30)",
    gridwidth: 2,
    zerolinecolor: "#969696",
    zerolinewidth: 4,
    linecolor: "#636363",
    linewidth: 6,
  };

  //------Configuarciones del aspecto de la grafica
  const layout = {
    autosize: true,
    dragmode: "orbit",
    title: "Obtained Map",
    font: {
      color: "rgb(255, 255, 255)",
    },
    paper_bgcolor: "rgb(0, 0, 0)",
    showlegend: true,
    height: 700,
    margin: {
      l: 20,
      r: 50,
      b: 10,
      t: 50,
      pad: 1,
    },
    scene: {
      aspectratio: {
        x: 1,
        y: 1,
        z: 1,
      },
      camera: {
        center: {
          x: 0,
          y: 0.05,
          z: 0,
        },
        eye: {
          x: -0.5,
          y: 0.01,
          z: 0.01,
        },
        up: {
          x: 0.0,
          y: 0.0,
          z: 1,
        },
      },
      xaxis: axisOptions,
      yaxis: axisOptions,
      zaxis: axisOptions,
    },
    sliders: [
      {
        pad: { t: 30 },
        len: 0.2,
        currentvalue: {
          xanchor: "middle",
          x: 0,
          y: 0,
          prefix: "Points Size: ",
          font: {
            size: 10,
          },
        },
        steps: [
          {
            label: "small",
            method: "restyle",
            args: ["visible", [true, false, false, true, true, true, true]],
          },
          {
            label: "med",
            method: "restyle",
            args: ["visible", [false, true, false, true, true, true, true]],
          },
          {
            label: "high",
            method: "restyle",
            args: ["visible", [false, false, true, true, true, true, true]],
          },
        ],
      },
    ],
  };

  return {
    data:[
        mapaDePuntos,
        mapaDePuntosMediano,
        mapaDePuntosGrande,
        trayectoria,
        frames,
        startFrame,
        endFrame
    ],
    layout: layout
  }
}
