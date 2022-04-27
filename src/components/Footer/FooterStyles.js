import styled from "styled-components";

export const Div1 = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
`

export const P = styled.p`
  text-align: left;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 12px;
  color: rgba(128,128,128, 0.5);
`

export const P2 = styled.p`
  text-align: left;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 16px;
  color: rgba(128,128,128, 0.5);

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 11px;
  }
`
