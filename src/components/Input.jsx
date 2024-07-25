import { useContext, useEffect, useState } from "react";
import { MortgageContext } from "../App";
import {
  capitalize,
  formatNumberWithoutSymbol,
  parseFormattedNumber,
} from "../helpers/stringFormatter";

export default function Input({
  id,
  label,
  symbol,
  utilInputClasses,
  utilInputContainerClasses,
  isValid = true,
  max,
}) {
  const { setMortgageInput, mortgageInput } = useContext(MortgageContext);
  const [amount, setAmount] = useState("");

  const name = id.split("-");
  const key = `${name[0]}${capitalize(name[1])}`;

  function inputHandler(e) {
    let value = e.target.value;

    if (key === "mortgageAmount") value = parseFormattedNumber(value);

    if (isNaN(value)) return;
    if (Number(value) > max) return;

    if (key === "mortgageAmount") {
      let amount = !!value ? formatNumberWithoutSymbol(value, "en-us") : "";
      setAmount(amount);
    }

    setMortgageInput((prev) => ({ ...prev, [key]: value }));
  }

  const inputBorder = !isValid ? "border-red" : "border-slate-500";
  const symbolBackground = !isValid ? "bg-red" : "bg-slate-100";
  const symbolColor = !isValid ? "text-white" : "slate-700";

  return (
    <>
      <div className={`${utilInputContainerClasses} flex flex-col gap-2`}>
        <label
          className="mb-1 text-base font-semibold text-slate-700"
          htmlFor={id}
        >
          {label}
        </label>
        <div
          className={`flex min-h-12.5 w-full ${utilInputClasses} items-stretch gap-4 overflow-auto rounded border ${inputBorder} focus-within:border-lime-400`}
        >
          <input
            className="peer min-h-full w-full font-bold"
            id={id}
            type="text"
            onChange={inputHandler}
            value={key === "mortgageAmount" ? amount : mortgageInput[key]}
            autocomplete="off"
          />
          <span
            className={`flex items-center ${symbolBackground} px-4 text-lg font-bold ${symbolColor} focus-within:bg-lime-400 peer-focus:bg-lime-400 peer-focus:text-slate-900`}
          >
            {symbol}
          </span>
        </div>
        {!isValid && (
          <p className="font-medium text-red">This field is required</p>
        )}
      </div>
    </>
  );
}
