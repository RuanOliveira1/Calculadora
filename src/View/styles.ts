import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  width: 100%;
  height: 100%;

  background: #807ece;
  display: flex;
  justify-content: center;
`;

export const CalculatorContainer = styled.div`
  max-width: 356px;
  box-sizing: border-box;
  background: #2d2a37;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04),
    0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26),
    0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1),
    inset 0px -4px 5px rgba(0, 0, 0, 0.22);
  border-radius: 48px;
  padding: 32px;
`;
