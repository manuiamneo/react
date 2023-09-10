import React from "react";

function CompanySelect({
  companyDetails,
  selectedCompanies,
  handleToggleSelectCompany,
  handleSelectAllCompanies,
}) {
  const isActive = (company) => selectedCompanies.some((c) => c.id === company.id);
  
  return (
    <div className="t-flex t-gap-10 t-mb-10">
      <div
        onClick={() => handleSelectAllCompanies()}
        className={`t-h-40 t-cursor-pointer t-rounded-3xl t-flex t-items-center t-px-15 t-gap-10 t-text-medium 
          ${selectedCompanies.length === companyDetails.length ? 't-bg-primary t-text-white' : 't-border t-border-solid t-border-border-clr'}`}
      >
        All Companies
      </div>
      {companyDetails.map((company) => (
        <div
          key={company.id}
          onClick={() => handleToggleSelectCompany(company)}
          className={`t-h-40 t-cursor-pointer t-rounded-3xl t-flex t-items-center t-px-15 t-gap-10 t-text-medium 
            ${isActive(company) ? 't-bg-primary t-text-white' : 't-border t-border-solid t-border-border-clr'}`}
        >
          {company.name}
        </div>
      ))}
    </div>
  );
}

export default CompanySelect;
