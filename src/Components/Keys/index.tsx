import React from "react";
import { Container } from "./styles";

const Keys = ({ keyName, colored, onClick }: any) => {
  return (
    <Container onClick={onClick} colored={colored}>
      {keyName}
    </Container>
  );
};

export default Keys;
