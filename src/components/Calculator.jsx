import React, { useContext, useEffect, useState, useRef } from "react";
import Input from "./Input";
import RadioBtn from "./RadioBtn";
import { MortgageContext } from "../App";
import {
  calculateInterest,
  calculateRepayments,
} from "../helpers/mortgageCalculator";

const defaultInputValidation = {
  mortgageAmount: true,
  mortgageTerm: true,
  interestRate: true,
  mortgageType: true,
};

export default function Calculator() {
  const { mortgageInput, setResult, setMortgageInput } =
    useContext(MortgageContext);

  const radioBtnRepayments = useRef(null);
  const radioBtnIntereset = useRef(null);

  const [isValidated, setIsValidated] = useState(false);
  const [mortgageInputValidation, setMortgageInputValidation] = useState(
    defaultInputValidation,
  );

  function clearAll() {
    setMortgageInput({
      mortgageAmount: "",
      mortgageTerm: "",
      interestRate: "",
      mortgageType: "",
    });

    setIsValidated(false);

    setMortgageInputValidation(defaultInputValidation);

    radioBtnRepayments.current.checked = false;
    radioBtnIntereset.current.checked = false;
  }

  function getInputValidation() {
    return {
      mortgageAmount: !!mortgageInput["mortgageAmount"],
      mortgageTerm: !!mortgageInput["mortgageTerm"],
      interestRate: !!mortgageInput["interestRate"],
      mortgageType: !!mortgageInput["mortgageType"],
    };
  }

  function onCalculate() {
    const inputValidation = getInputValidation();

    if (!Object.values(inputValidation).every((value) => value == true)) {
      setMortgageInputValidation(inputValidation);
      setIsValidated(true);
      return;
    }

    switch (mortgageInput["mortgageType"]) {
      case "repayment":
        setResult(
          calculateRepayments(
            mortgageInput["mortgageAmount"],
            mortgageInput["interestRate"],
            mortgageInput["mortgageTerm"],
          ),
        );
        break;
      case "interest":
        setResult(
          calculateInterest(
            mortgageInput["mortgageAmount"],
            mortgageInput["interestRate"],
            mortgageInput["mortgageTerm"],
          ),
        );
        break;
    }

    setIsValidated(false);
  }

  useEffect(() => {
    if (isValidated) {
      setMortgageInputValidation(getInputValidation());
    }
  }, [mortgageInput]);

  return (
    <section className="flex w-full flex-1 items-stretch">
      <div className="p-fluid w-full">
        <div className="mb-10 flex flex-wrap justify-between gap-x-6 gap-y-2">
          <h1 className="text-2xl font-bold">Mortgage Calculator</h1>
          <button
            onClick={clearAll}
            className="font-semibold text-slate-700 underline underline-offset-2"
          >
            Clear All
          </button>
        </div>
        <div className="grid auto-rows-auto grid-cols-2 gap-6 max-[850px]:grid-cols-fit">
          <Input
            id={"mortgage-amount"}
            label={"Mortgage Amount"}
            symbol={"£"}
            utilInputClasses={"flex-row-reverse justify-end"}
            utilInputContainerClasses={"col-span-full"}
            isValid={mortgageInputValidation["mortgageAmount"]}
          />
          <Input
            id={"mortgage-term"}
            label={"Mortgage Term"}
            symbol={"years"}
            utilInputClasses={"justify-between pl-4"}
            isValid={mortgageInputValidation["mortgageTerm"]}
          />
          <Input
            id={"interest-rate"}
            label={"Interest Rate"}
            symbol={"%"}
            utilInputClasses={"justify-between pl-4"}
            isValid={mortgageInputValidation["interestRate"]}
          />
          <fieldset className="col-span-full grid gap-2">
            <legend className="mb-1 flex gap-3 text-base font-semibold text-slate-700">
              Mortgage Type
            </legend>
            <RadioBtn
              id={"repayment"}
              label={"Repayment"}
              radioBtnRef={radioBtnRepayments}
            />
            <RadioBtn
              id={"interest"}
              label={"Interest Only"}
              radioBtnRef={radioBtnIntereset}
            />
            {!mortgageInputValidation["mortgageType"] && (
              <p className="font-medium text-red">This field is required</p>
            )}
          </fieldset>
        </div>
        <button
          onClick={onCalculate}
          className="mt-9 flex h-14 w-full max-w-80 items-center justify-center gap-2 rounded-full bg-lime-400 text-lg font-bold max-[450px]:max-w-full"
        >
          <img aria-hidden src="/icon-calculator.svg" alt="calculator icon" />
          Calculate Repayments
        </button>
      </div>
    </section>
  );
}
