import "./App.css";
import Calculator from "./components/Calculator";
import Result from "./components/Result";
import { createContext, useState } from "react";

export const MortgageContext = createContext({
  mortgageInput: "",
  setMortgageInput: () => {},
  setResult: () => {},
  result: 0,
});

function App() {
  const [mortgageInput, setMortgageInput] = useState({
    mortgageAmount: "",
    mortgageTerm: "",
    interestRate: "",
    mortgageType: "",
  });

  const [result, setResult] = useState(null);

  return (
    <MortgageContext.Provider
      value={{ mortgageInput, setMortgageInput, setResult, result }}
    >
      <main className="mx-10 my-5 flex w-main max-w-main flex-wrap overflow-auto rounded-3xl bg-white max-md:flex-col max-[450px]:m-0 max-[450px]:rounded-none">
        <Calculator />
        <Result />
      </main>
    </MortgageContext.Provider>
  );
}

export default App;
