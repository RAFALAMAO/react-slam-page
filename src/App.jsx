import './App.css';
import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import axios from 'axios';
import { formatData } from './utils/formatData';
import Plot3D from './components/Plot3D/Plot3D';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Spinner from './components/Spinner/Spinner';
import { ThemeProvider } from 'styled-components';
import theme from "./themes/default";

export function App() {

  // const [rows, setRows] = useState([]);
  const [fetching, setFetching] = useState(true);

  const [data, setData] = useState([]);
  const [layout, setLayout] = useState({});

  const [delayAnimation, setDelayAnimation] = useState([1.3, 1.6]);

  useEffect(() => {
    setFetching(true);
    async function getData() {

      const response = await axios.get("https://raw.githubusercontent.com/AaronJuarezT/ORBSLAM2prueba/c2c4fb1575d5d83cf58878b9225feab7b3f259df/mapAndTrajectory.csv");
      const results = Papa.parse(response.data, { header: true }); // object with { data, errors, meta }
      const rows = results.data; // array of objects

      const formatedData = formatData(rows);

      setData(formatedData.data);
      setLayout(formatedData.layout);

      setTimeout(function() { //Start the timer
        setFetching(false); //After 1.2 second, set render to true
      }, 1200)
    }
    getData();
  }, []);

  const resetDelayanimation = (data) => {
    setDelayAnimation(data);
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      {
        fetching ? <Spinner/>: (
          <div>
            <Header/>
            <Plot3D resetAnimation={{function:resetDelayanimation, value:delayAnimation}} data={data} layout={layout} />
            <Footer/>
          </div>
        )
      }
    </ThemeProvider>
    </>
  )
}

export default App;
