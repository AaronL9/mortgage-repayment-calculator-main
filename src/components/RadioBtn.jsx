import React, { useContext } from "react";
import { MortgageContext } from "../App";

export default function RadioBtn({ id, label, radioBtnRef }) {
  const { setMortgageInput } = useContext(MortgageContext);

  function onChangeHandler(e) {
    setMortgageInput((prev) => ({ ...prev, mortgageType: id }));
  }

  return (
    <label
      className="flex min-h-12.5 w-full items-center gap-4 rounded border border-slate-500 font-bold capitalize text-slate-900 hover:border-lime-400 has-[:checked]:border-lime-400 has-[:checked]:bg-lime-200"
      htmlFor={id}
    >
      <input
        ref={radioBtnRef}
        className="peer"
        id={id}
        type="radio"
        name="mortgage-type"
        value={id}
        onChange={onChangeHandler}
      />
      <div className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-slate-700 peer-checked:border-lime-400 peer-checked:*:visible">
        <div className="invisible h-3 w-3 rounded-full bg-lime-400"></div>
      </div>
      <p>{label}</p>
    </label>
  );
}
