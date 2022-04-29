import Plot from 'react-plotly.js';
import { Container, Div1, PlotDiv, Instructions, H3, Ul, satelliteView } from './Plot3DStyles';

export default function Plot3D({resetAnimation, data, layout }) {
  return (
    <Div1>
      <Container>
        <PlotDiv
          animate={{ x: [-100,0], opacity: [0,1] }}
          transition={{
            delay: resetAnimation.value[0],
            default: { duration: .5 },
          }}
          whileHover={{
            scale: 1.01,
            transition: { duration: .2 }
          }}
          onHoverStart={e => {resetAnimation.function([0,0])}}
        >
          <Plot
          data={data}
          layout={layout}
          config={{responsive: true}}
          divId='myDiv'
          style={{position: 'relative'}}
          />
        </PlotDiv>

        <Instructions
          animate={{ x: [100,0], opacity: [0,1] }}
          transition={{
            delay: resetAnimation.value[1],
            default: { duration: .5 },
          }}
          whileHover={{
            scale: 1.01,
            transition: { duration: .2, delay: 0}
          }}
          onHoverStart={e => {resetAnimation.function([0,0])}}
        >
          <H3>Map interaction</H3>
          <Ul>
            <li>Left Click: rotate map.</li>
            <li>Right Click: translate map.</li>
            <li>Mouse Scroll: zoom.</li>
            <li>If the map has been modified (GitRepo), just reload the
                page to view the changes (may take up to 5 minutes).</li>
            <li>On the top side of the graph you can show or hide some
                parameters by clicking on the element name.</li>
            <li>At the bottom of the graph you can change the size of the points.</li>
            <li>The map can be downloaded as an image in the top menu of the graph.</li>
          </Ul>

          <p style={{'fontSize': '14px'}}>You can consult the <span> </span>
              <a style={{color: 'rgb(130, 247, 255)'}}
              href="https://raw.githubusercontent.com/AaronJuarezT/ORBSLAM2prueba/c2c4fb1575d5d83cf58878b9225feab7b3f259df/mapAndTrajectory.csv"
              target="_blank"
              rel="noreferrer">
              used data</a>
              ,<span> </span>
              <a style={{color: 'rgb(130, 247, 255)'}}
              href="https://github.com/RAFALAMAO/react-slam-page/tree/master"
              target="_blank"
              rel="noreferrer">
              source code</a>
              <span> </span>of this page, full ORBSLAM <span> </span>
              <a style={{color: 'rgb(130, 247, 255)'}}
              href="https://youtu.be/6Fv7bVzNU6c"
              target="_blank"
              rel="noreferrer">
              proyect video</a>
              <span> </span>or the <span> </span>
              <a style={{color: 'rgb(130, 247, 255)'}}
              href="https://plotly.com/javascript/react/"
              target="_blank"
              rel="noreferrer">
              tool</a>
              <span> </span>used to graph.
          </p>
          <H3>Satellite view</H3>
          <img src="img/vistaSatelital.png" style={satelliteView} alt='IPN_LOGO'/>
        </Instructions>
      </Container>
    </Div1>
  )
}
