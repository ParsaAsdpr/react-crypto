import React from "react";

const TabkeRow = ({
  name,
  price,
  symbol,
  icon,
  priceChange,
  rank,
  marketcap,
}) => {
  return (
    <div className="w-full py-8 px-6 border-b border-stone-400 grid grid-cols-6 md:grid-cols-7 text-lg">

      <h1 className="hidden md:block">{rank}</h1>

      <p className="flex flex-row gap-2 items-center text-xs sm:text-sm md:text-base font-bold col-span-2">
      <img src={icon} alt={symbol} className="w-[30px] h-[30px]" />
        {name} ({symbol})
      </p>

      <p className="text-xs sm:text-sm md:text-base">{price.toFixed(2).toLocaleString()} دلار </p>

      {priceChange < 0 ? (
        <p className="text-red-500 text-xs sm:text-sm md:text-base">{priceChange.toFixed(2)} %</p>
      ) : (
        <p className="text-green-500 text-xs sm:text-sm md:text-base">{priceChange.toFixed(2)} %</p>
      )}

      <p className="col-span-2 text-xs sm:text-sm md:text-base">${marketcap.toFixed(2).toLocaleString()} دلار </p>
    </div>
  );
};

export default TabkeRow;
