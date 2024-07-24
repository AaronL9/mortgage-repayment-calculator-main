import { useContext } from "react";
import { MortgageContext } from "../App";
import { formatCurrencyWithSuffix } from "../helpers/stringFormatter";

export default function Result() {
  const { result } = useContext(MortgageContext);

  const showResult = !!result;

  let GBPound = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  });

  return (
    <section className="flex-1 rounded-bl-7xl bg-slate-900 max-md:rounded-bl-none">
      {showResult ? (
        <div className="grid gap-4 p-8 max-[420px]:p-6">
          <h2 className="text-2xl font-bold text-white">Your results</h2>
          <p className="font-bold text-slate-500">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click “calculate
            repayments” again.
          </p>
          <div className="p-fluid-sm gap-fluid-sm flex h-fit flex-col justify-center rounded-md border-t-4 border-lime-400 bg-dark-blue-black text-white">
            <section>
              <h3 className="font-semibold text-slate-500">
                Your monthly repayments
              </h3>
              <span className="text-fluid font-bold text-lime-400">
                {result["monthly"] > 999999
                  ? formatCurrencyWithSuffix(result["monthly"])
                  : GBPound.format(result["monthly"])}
              </span>
            </section>
            <hr className="border-slate-700 opacity-50" />
            <section>
              <h3 className="mb-1 font-semibold text-slate-500">
                Total you'll repay over the term
              </h3>
              <p className="text-2xl font-bold">
                {result["total"] > 999999999
                  ? formatCurrencyWithSuffix(result["total"])
                  : GBPound.format(result["total"])}
              </p>
            </section>
          </div>
        </div>
      ) : (
        <div className="p-fluid flex h-full flex-col items-center justify-center text-center">
          <img src="/illustration-empty.svg" alt="illustration" />
          <h2 className="mb-2 text-2xl font-bold text-white">
            Result shown here
          </h2>
          <p className="text-base font-bold text-slate-500">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </div>
      )}
    </section>
  );
}
