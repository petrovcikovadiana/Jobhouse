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
      <h1>Create a new post</h1>
      <form onSubmit={handleSubmit}>
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
