import React, { createContext, useContext } from "react";

interface CalculatorData {
  currentKey: any;
  setCurrentKey: React.Dispatch<React.SetStateAction<any>>;
}

interface Props {
  children: React.ReactElement;
}

const Calculator = createContext<CalculatorData>({} as CalculatorData);

const CalculatorProvider: React.FC<Props> = ({ children }) => {
  const [currentKey, setCurrentKey] = React.useState<any>(0);
  return (
    <Calculator.Provider
      value={{
        currentKey,
        setCurrentKey,
      }}
    >
      {children}
    </Calculator.Provider>
  );
};

function useCalculator(): CalculatorData {
  const context = useContext(Calculator);
  if (!context) {
    throw new Error("useCalculator must be used within an Calculator");
  }
  return context;
}

export { CalculatorProvider, useCalculator };
