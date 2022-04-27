import styled,{ keyframes } from "styled-components";

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const Rotate = styled.div`
  display: flex;
  animation: ${rotate} .8s infinite;
  padding: 0;
`;