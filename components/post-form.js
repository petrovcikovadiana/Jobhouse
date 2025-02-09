"use client";

import { useState } from "react";
import FormSubmit from "@/components/form-submit";

export default function PostForm({ action }) {
  const [errors, setErrors] = useState([]); // Uchování chyb

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Zavolání serverové akce a zpracování výsledku
    const result = await action(formData);

    if (result && result.errors) {
      setErrors(result.errors); // Nastavení chyb
    }
  };

  return (
    <>
      <h1>Create a new position</h1>
      <form className="form-layout" onSubmit={handleSubmit}>
        <p className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="company">Company name</label>
          <input type="text" id="company" name="company" />
        </p>
        <p className="form-control">
          <label htmlFor="location">Location</label>
          <input type="text" id="location" name="location" />
        </p>
        <p className="form-control">
          <label htmlFor="salary">Salary</label>
          <input type="text" id="salary" name="salary" />
        </p>
        <p className="form-control">
          <label htmlFor="jobContract">Job contract</label>
          <input type="text" id="jobContract" name="jobContract" />
        </p>
        <p className="form-control">
          <label htmlFor="field">Field</label>
          <select id="field" name="field">
            <option value="">Select field</option>
            <option value="Web development">Web development</option>
            <option value="QA / Tester">QA / Tester</option>
            <option value="Marketing">Marketing</option>
            <option value="Design">Design</option>
            <option value="IT Analyst">IT Analyst</option>
            <option value="Project manager">Project manager</option>
            <option value="IT admin">IT admin</option>
          </select>
        </p>

        <p className="form-control">
          <label htmlFor="seniority">Seniority</label>
          <input type="text" id="seniority" name="seniority" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image </label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <div className="form-actions">
          <FormSubmit />
        </div>
        {/* Zobrazení chyb */}
        {errors.length > 0 && (
          <ul className="form-errors">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        )}
      </form>
    </>
  );
}
