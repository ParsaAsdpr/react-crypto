import React from "react";

const Table = ({ children }) => {
  return (
    <div  dir="rtl" className="text-white">
      <div className="px-5 text-xl py-6 bg-slate-900">
        <div className="max-w-7xl grid grid-cols-6 md:grid-cols-7 mx-auto">
        <p className="hidden md:block">رتبه</p>
        <p className="col-span-2">نام ارز</p>
        <p>قیمت</p>
        <p>روزانه</p>
        <p className="col-span-2">حجم بازار</p>
        </div>
      </div>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
    </div>
  );
};

export default Table;
