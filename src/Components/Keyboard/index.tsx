import React from "react";
import { KeyboardContainer } from "./styles";
import Keys from "../Keys";

const Keyboard = () => {
  return (
    <KeyboardContainer>
      <Keys keyName="CE" />
      <Keys keyName="C" />
      <Keys keyName="%" />
      <Keys keyName="/" />
      <Keys keyName="7" />
      <Keys keyName="8" />
      <Keys keyName="9" />
      <Keys keyName="x" />
      <Keys keyName="4" />
      <Keys keyName="5" />
      <Keys keyName="6" />
      <Keys keyName="-" />
      <Keys keyName="1" />
      <Keys keyName="2" />
      <Keys keyName="3" />
      <Keys keyName="+" />
      <Keys keyName="#" />
      <Keys keyName="0" />
      <Keys keyName="#" />
      <Keys keyName="=" />
    </KeyboardContainer>
  );
};

export default Keyboard;
