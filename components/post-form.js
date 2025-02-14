"use client";

import { useState } from "react";
import FormSubmit from "@/components/form-submit";

export default function PostForm({ action }) {
  const [errors, setErrors] = useState([]); // Uchování chyb
  const [requirements, setRequirements] = useState([""]); // Počáteční požadavek
  const [skills, setSkills] = useState([""]);
  const [benefits, setBenefits] = useState([""]);
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // ✅ Přidání dynamických polí do FormData
    formData.append("requirements", JSON.stringify(requirements));
    formData.append("skills", JSON.stringify(skills));
    formData.append("benefits", JSON.stringify(benefits));
    formData.append("languages", JSON.stringify(selectedLanguages));

    // Zavolání serverové akce a zpracování výsledku
    const result = await action(formData);

    if (result && result.errors) {
      setErrors(result.errors); // Nastavení chyb
    }
  };
  const addRequirement = () => setRequirements([...requirements, ""]);
  const updateRequirement = (index, value) => {
    const updated = [...requirements];
    updated[index] = value;
    setRequirements(updated);
  };
  const removeRequirement = (index) => {
    setRequirements(requirements.filter((_, i) => i !== index));
  };

  // Funkce pro přidání nového pole pro dovednosti
  const addSkill = () => setSkills([...skills, ""]);
  const updateSkill = (index, value) => {
    const updated = [...skills];
    updated[index] = value;
    setSkills(updated);
  };
  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  // Funkce pro přidání nového pole pro dovednosti
  const addBenefit = () => setBenefits([...benefits, ""]);
  const updateBenefit = (index, value) => {
    const updated = [...benefits];
    updated[index] = value;
    setBenefits(updated);
  };
  const removeBenefit = (index) => {
    setBenefits(benefits.filter((_, i) => i !== index));
  };

  const handleLanguageChange = (e) => {
    const { value, checked } = e.target;
    setSelectedLanguages((prevLanguages) =>
      checked
        ? [...prevLanguages, value]
        : prevLanguages.filter((lang) => lang !== value)
    );
  };

  return (
    <>
      <h1>Create a new position</h1>
      <form className="form-layout" onSubmit={handleSubmit}>
        <p className="form-control">
          <label htmlFor="title">Position name</label>
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
          <select id="jobContract" name="jobContract">
            <option value="">Select job contract</option>
            <option value="Full time">Full time</option>
            <option value="Part time">Part time</option>
            <option value="Freelance">Freelance</option>
            <option value="IČO">IČO</option>
            <option value="Contractor">Contractor</option>
            <option value="Trainee">Trainee</option>
          </select>
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
          <select id="seniority" name="seniority">
            <option value="">Select field</option>
            <option value="Junior">Junior</option>
            <option value="Medior">Medior</option>
            <option value="Senior">Senior</option>
            <option value="Student">Student</option>
          </select>
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
          <label>Languages</label>
          <div>
            {["English", "German", "French", "Spanish", "Czech", "Slovak"].map(
              (lang) => (
                <label key={lang}>
                  <input
                    type="checkbox"
                    value={lang}
                    checked={selectedLanguages.includes(lang)}
                    onChange={handleLanguageChange}
                  />
                  {lang}
                </label>
              )
            )}
          </div>
        </p>

        <p className="form-control">
          <label htmlFor="technology">Technology</label>
          <input type="text" id="technology" name="technology" />
        </p>

        <p className="form-control">
          <label htmlFor="content">About position</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        {/* Requirements Section */}
        <div className="dynamic-section">
          <label>Náplň práce</label>
          {requirements.map((req, index) => (
            <div key={index} className="dynamic-input">
              <input
                type="text"
                name="requirements[]"
                value={req}
                onChange={(e) => updateRequirement(index, e.target.value)}
                placeholder="Enter requirement"
                required
              />
              {requirements.length > 1 && (
                <button type="button" onClick={() => removeRequirement(index)}>
                  ❌
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={addRequirement} className="add-btn">
            ➕ Add náplň práce
          </button>
        </div>

        {/* Skills / Qualifications Section */}
        <div className="dynamic-section">
          <label>Skills / Qualifications</label>
          {skills.map((skill, index) => (
            <div key={index} className="dynamic-input">
              <input
                type="text"
                value={skill}
                name="skills[]"
                onChange={(e) => updateSkill(index, e.target.value)}
                placeholder="Enter skill/qualification"
                required
              />
              {skills.length > 1 && (
                <button type="button" onClick={() => removeSkill(index)}>
                  ❌
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={addSkill} className="add-btn">
            ➕ Add Skill
          </button>
        </div>

        <div className="dynamic-section">
          <label>Benefits</label>
          {benefits.map((benefit, index) => (
            <div key={index} className="dynamic-input">
              <input
                type="text"
                value={benefit}
                name="benefits[]"
                onChange={(e) => updateBenefit(index, e.target.value)}
                placeholder="Enter benefit"
                required
              />
              {benefits.length > 1 && (
                <button type="button" onClick={() => removeBenefit(index)}>
                  ❌
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={addBenefit} className="add-btn">
            ➕ Add Benefit
          </button>
        </div>
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
