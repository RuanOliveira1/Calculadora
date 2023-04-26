import React from "react";
import { KeyboardContainer } from "./styles";
import Keys from "../Keys";
import { useCalculator } from "../../Context/Calculator";

const Keyboard = () => {
  const { currentKey, setCurrentKey } = useCalculator();

  const handleNumber = (item: number) => {
    currentKey ? setCurrentKey(`${currentKey}${item}`) : setCurrentKey(item);
  };

  const handleOperator = (operator: string) => {
    currentKey && setCurrentKey(`${currentKey}${operator}`);
  };

  const calculate = () => {
    const newCurrentKey = currentKey.replace("x", "*");

    const calc = eval(newCurrentKey);

    setCurrentKey(calc);
  };

  return (
    <KeyboardContainer>
      <Keys keyName="CE" onClick={() => setCurrentKey("")} />
      <Keys keyName="C" onClick={() => setCurrentKey("")} />
      <Keys keyName="%" />
      <Keys keyName="/" colored onClick={() => handleOperator("/")} />
      <Keys keyName="7" onClick={() => handleNumber(7)} />
      <Keys keyName="8" onClick={() => handleNumber(8)} />
      <Keys keyName="9" onClick={() => handleNumber(9)} />
      <Keys keyName="x" colored onClick={() => handleOperator("x")} />
      <Keys keyName="4" onClick={() => handleNumber(4)} />
      <Keys keyName="5" onClick={() => handleNumber(5)} />
      <Keys keyName="6" onClick={() => handleNumber(6)} />
      <Keys keyName="-" colored onClick={() => handleOperator("-")} />
      <Keys keyName="1" onClick={() => handleNumber(1)} />
      <Keys keyName="2" onClick={() => handleNumber(2)} />
      <Keys keyName="3" onClick={() => handleNumber(3)} />
      <Keys keyName="+" colored onClick={() => handleOperator("+")} />
      <Keys keyName="#" />
      <Keys keyName="0" onClick={() => handleNumber(0)} />
      <Keys keyName="#" />
      <Keys keyName="=" colored onClick={() => calculate()} />
    </KeyboardContainer>
  );
};

export default Keyboard;
