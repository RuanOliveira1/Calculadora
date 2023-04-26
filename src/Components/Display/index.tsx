import { Container } from "./styles";
import { useCalculator } from "../../Context/Calculator";

const Display = () => {
  const { currentKey } = useCalculator();

  return <Container>{currentKey}</Container>;
};

export default Display;
