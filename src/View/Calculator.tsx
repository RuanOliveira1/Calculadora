import React from "react";
import { CalculatorContainer, Container } from "./styles";

import Keyboard from "../Components/Keyboard";
import Display from "../Components/Display";

const Calculator = () => {
  return (
    <Container>
      <CalculatorContainer>
        <Display />
        <Keyboard />
      </CalculatorContainer>
    </Container>
  );
};

export default Calculator;
