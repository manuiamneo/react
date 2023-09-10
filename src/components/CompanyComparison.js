import React from "react";
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import { COLORS } from "../constants/constant";

function CompanyComparison({ companies }) {
  if (!companies || companies.length === 0) {
    return (
      <div className="t-m-4">
        <h2 className="t-text-2xl t-font-bold t-mb-6">Company Comparison</h2>
        <p className="t-text-lg t-text-gray-600">
          No companies selected for comparison.
        </p>
      </div>
    );
  }

  const transformedData = companies[0]?.growth.map((g) => {
    const obj = { month: g.month };
    companies.forEach((company) => {
      const growthObj = company.growth.find((item) => item.month === g.month);
      if (growthObj) {
        obj[company.name] = growthObj.rate;
      }
    });
    return obj;
  });

  return (
    <div className="t-mb-10">
      <h2 className="t-text-2xl t-font-bold t-mb-6">Company Comparison</h2>

      <div className="t-flex t-justify-between t-flex-wrap">
        <div className="t-w-1/3 t-px-4">
          <h3 className="t-text-xl t-font-semibold t-mb-4">
            Sentiment Analysis
          </h3>
          <BarChart width={450} height={300} data={companies}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="sentiment" fill="#82ca9d" />
          </BarChart>
        </div>

        <div className="t-w-1/3 t-px-4">
          <h3 className="t-text-xl t-font-semibold t-mb-4">Market Share</h3>
          <PieChart width={450} height={300}>
            <Pie
              dataKey="marketShare"
              data={companies}
              cx={200}
              cy={150}
              outerRadius={100}
              fill="#8884d8"
              label
            >
              {companies.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>

        <div className="t-w-1/3 t-px-4">
          <h3 className="t-text-xl t-font-semibold t-mb-4">Growth Analysis</h3>
          <LineChart width={450} height={300} data={transformedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            {companies.map((company, index) => (
              <Line
                key={company.id}
                type="monotone"
                dataKey={company.name}
                stroke={COLORS[index % COLORS.length]}
              />
            ))}
          </LineChart>
        </div>
      </div>
    </div>
  );
}

export default CompanyComparison;
