"use client";

import { useState } from "react";

export default function Filter({ onApply }) {
  const [filters, setFilters] = useState({
    location: [], // Může obsahovat více lokalit
    salary: 0,
    jobContract: [],
    field: [],
    seniority: [],
  });

  const handleLocationClick = (location) => {
    setFilters((prev) => ({
      ...prev,
      location: prev.location.includes(location)
        ? prev.location.filter((loc) => loc !== location) // Odebere lokaci
        : [...prev.location, location], // Přidá lokaci
    }));
  };

  const handleJobContractClick = (jobContract) => {
    setFilters((prev) => ({
      ...prev,
      jobContract: prev.jobContract.includes(jobContract)
        ? prev.jobContract.filter((job) => job !== jobContract)
        : [...prev.jobContract, jobContract],
    }));
  };

  const handleFieldClick = (field) => {
    setFilters((prev) => ({
      ...prev,
      field: prev.field.includes(field)
        ? prev.field.filter((fie) => fie !== field)
        : [...prev.field, field],
    }));
  };

  const handleSeniorityClick = (seniority) => {
    setFilters((prev) => ({
      ...prev,
      seniority: prev.seniority.includes(seniority)
        ? prev.seniority.filter((sen) => sen !== seniority)
        : [...prev.seniority, seniority],
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSalaryChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      salary: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onApply(filters); // Předání filtrů rodičovské komponentě
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Locations:</p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {[
            "Praha",
            "Brno",
            "Plzeň",
            "Ostrava",
            "Olomouc",
            "Kladno",
            "Mladá Boleslav",
          ].map((location) => (
            <button
              key={location}
              type="button"
              onClick={() => handleLocationClick(location)}
              style={{
                padding: "10px 15px",
                border: "1px solid #ccc",
                borderRadius: "15px",
                backgroundColor: filters.location.includes(location)
                  ? "rgb(193, 127, 204)" // Modrá, pokud je vybraná
                  : "#fff", // Bílá, pokud není vybraná
                color: filters.location.includes(location) ? "#fff" : "#000",
                cursor: "pointer",
              }}
            >
              {location}
            </button>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <label htmlFor="salary">Salary:</label>
        <input
          type="range"
          id="salary"
          name="salary"
          min="0"
          max="100000"
          step="1000"
          value={filters.salary}
          onChange={handleSalaryChange}
        />
        <p>Selected Salary: {filters.salary} CZK</p>
      </div>
      <div>
        <p>Job Contract:</p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {[
            "Full time",
            "Part time",
            "Freelance",
            "IČO",
            "Contractor",
            "Trainee",
          ].map((jobContract) => (
            <button
              key={jobContract}
              type="button"
              onClick={() => handleJobContractClick(jobContract)}
              style={{
                padding: "10px 15px",
                border: "1px solid #ccc",
                borderRadius: "15px",

                backgroundColor: filters.jobContract.includes(jobContract)
                  ? "#007BFF" // Modrá, pokud je vybraná
                  : "#fff", // Bílá, pokud není vybraná
                color: filters.jobContract.includes(jobContract)
                  ? "#fff"
                  : "#000",
                cursor: "pointer",
              }}
            >
              {jobContract}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p>Field:</p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {[
            "Web development",
            "QA / Tester",
            "Marketing",
            "Design",
            "IT Analyst",
            "Project manager",
            "IT admin",
          ].map((field) => (
            <button
              key={field}
              type="button"
              onClick={() => handleFieldClick(field)}
              style={{
                padding: "10px 15px",
                border: "1px solid #ccc",
                borderRadius: "15px",

                backgroundColor: filters.field.includes(field)
                  ? "rgb(193, 127, 204)" // Modrá, pokud je vybraná
                  : "#fff", // Bílá, pokud není vybraná
                color: filters.field.includes(field) ? "#fff" : "#000",
                cursor: "pointer",
              }}
            >
              {field}
            </button>
          ))}
        </div>
      </div>

      <div>
        <p>Seniority:</p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {["Junior", "Medior", "Senior", "Student"].map((seniority) => (
            <button
              key={seniority}
              type="button"
              onClick={() => handleSeniorityClick(seniority)}
              style={{
                padding: "10px 15px",
                border: "1px solid #ccc",
                borderRadius: "15px",

                backgroundColor: filters.seniority.includes(seniority)
                  ? "rgb(193, 127, 204)" // Modrá, pokud je vybraná
                  : "#fff", // Bílá, pokud není vybraná
                color: filters.seniority.includes(seniority) ? "#fff" : "#000",
                cursor: "pointer",
              }}
            >
              {seniority}
            </button>
          ))}
        </div>
      </div>
      <button className="btn-filter" type="submit">
        Apply Filters
      </button>
    </form>
  );
}
