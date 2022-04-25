import styled from 'styled-components';
import { motion } from "framer-motion"

export const Div1 = styled(motion.div)`
  padding-top: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  opacity: 0;
`

export const Container = styled.div`
  display: flex;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 3rem;
  padding: .5rem;
  padding-top: .5rem;

  box-shadow: 1px 2px 2px rgba(100, 191, 250, 0.2);

  backdrop-filter: blur(25px) saturate(82%);
  -webkit-backdrop-filter: blur(25px) saturate(82%);
  // background-color: rgba(17, 17, 17, 0.9);
  background-color: rgba(21, 16, 25, .9);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  width: calc(60% - 100px);

  @media screen and (min-width: 768px) {
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.02);
    }
  }
`

export const H1 = styled.h1`
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: left;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 30px;
  padding-top: .2rem;
  padding-left: .2rem;
`

export const H2 = styled.h2`
  display: flex;
  padding: 1rem;
  padding-top: 2rem;

  color: aliceblue;
  text-align: left;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 25px;
`

export const ipnImage = {
  height: '100%',
  width: '90px',
  position:'relative',
  paddingTop: '15px',
  left: '10px',
  padding: '10px'
};

export const upiitaIcon = {
  height: "100%",
  width: "70px",
  position: "relative",
  right: "0px",
  left: '10px',
  padding: "10px"
};
