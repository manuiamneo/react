import React, { useEffect } from "react";

function CompanyList({ selectedCompanies, onToggleSelectCompany }) {

  return (
    <div className="t-mb-10">
      <h2 className="t-text-2xl t-font-bold t-mb-10">Selected Companies</h2>
      <div className="t-flex t-gap-10">
        {selectedCompanies.map((company) => (
          <li
            key={company.id}
            className="t-h-40 t-cursor-pointer t-rounded-3xl t-bg-neutral-gray t-flex t-items-center t-px-15 t-gap-10 t-text-medium"
          >
            <span className="t-font-medium">{company.name}</span>
            <div
              className="t-px-4 t-py-2 t-rounded t-bg-red-500 t-text-black"
              onClick={() => onToggleSelectCompany(company)}
            >
              X
            </div>
          </li>
        ))}
      </div>
    </div>
  );
}

export default CompanyList;
