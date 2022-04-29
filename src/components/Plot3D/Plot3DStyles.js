import styled from 'styled-components';
import { motion } from "framer-motion"

export const Div1 = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
`

export const PlotDiv = styled(motion.div)`
  backdrop-filter: blur(25px) saturate(82%);
  -webkit-backdrop-filter: blur(25px) saturate(82%);
  background-color: rgba(17, 17, 17, 0.9);
  background-color: rgba(10, 10, 17, 0.9);
  box-shadow: 1px 3px 20px rgba(100, 191, 250, 0.2);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);

  padding: 1rem;
  padding-top: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;

  opacity: 0;
`

export const Instructions = styled(motion.div)`
  backdrop-filter: blur(25px) saturate(82%);
  -webkit-backdrop-filter: blur(25px) saturate(82%);
  background-color: rgba(30, 30, 30, 0.9);
  box-shadow: 1px 2px 2px rgba(100, 191, 250, 0.2);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);

  padding-right: .5rem;
  padding-left: .5rem;

  opacity: 0;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 1rem;

  color: aliceblue;
  text-align: left;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 25px;

  @media ${(props) => props.theme.breakpoints.md} {
    grid-column-gap: 3rem;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    padding-bottom: 10px;

    gap: 10px;
  }

  // @media ${(props) => props.theme.breakpoints.sm} {
  //   grid-column-gap: 3rem;
  //   grid-template-columns: 1fr;
  //   grid-template-rows: 1fr 1fr;
  //   padding-bottom: 10px;

  //   gap: 10px;
  // }
`

export const H3 = styled.h3`
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-align: left;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 30px;

  padding-top: 0rem;
  padding-left: 0.3rem;
`

export const Ul = styled.ul`
  font-size: 13px;
  list-style-type: square;

  padding-inline-start: 20px;
`;

export const satelliteView = {
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginBottom: '10px',
  width: '68%',
  borderRadius: '12px'
}