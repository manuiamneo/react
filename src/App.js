import React, { useEffect, useState } from "react";
import CompanyList from "./components/CompanyList";
import CompanyComparison from "./components/CompanyComparison";
import CompanySelect from "./components/CompanySelect";
import Header from "./components/Header";
import { companiesData } from "./mock/data";

function App() {
  const [companyDetails, setCompanyDetails] = useState([]);
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  useEffect(() => {
    setCompanyDetails(companiesData);
    setSelectedCompanies(companiesData);
  }, []);

  const handleToggleSelectCompany = (company) => {
    if (selectedCompanies.some((item) => item.id === company.id)) {
      setSelectedCompanies((prev) =>
        prev.filter((item) => item.id !== company.id)
      );
    } else {
      setSelectedCompanies((prev) => [...prev, company]);
    }
  };

  const handleSelectAllCompanies = () => {
    if (selectedCompanies.length === companyDetails.length) {
      setSelectedCompanies([]);
    } else {
      setSelectedCompanies(companyDetails);
    }
  };

  return (
    <div className="t-overflow-x-hidden">
      <Header />
      <div className="t-p-20">
        <CompanySelect
          companyDetails={companyDetails}
          selectedCompanies={selectedCompanies}
          handleToggleSelectCompany={handleToggleSelectCompany}
          handleSelectAllCompanies={handleSelectAllCompanies}
        />
        <CompanyList
          selectedCompanies={selectedCompanies}
          onToggleSelectCompany={handleToggleSelectCompany}
        />
        <CompanyComparison companies={selectedCompanies} />
      </div>
    </div>
  );
}

export default App;
