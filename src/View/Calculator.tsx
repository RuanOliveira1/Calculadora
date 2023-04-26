import React from "react";
import { CalculatorContainer, Container } from "./styles";

import Keyboard from "../Components/Keyboard";

const Calculator = () => {
  return (
    <Container>
      <CalculatorContainer>
        <Keyboard />
      </CalculatorContainer>
    </Container>
  );
};

export default Calculator;
