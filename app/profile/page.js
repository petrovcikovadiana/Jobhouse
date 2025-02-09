"use client";
import { useEffect, useState } from "react";
import { useUser } from "@/app/context/UserContext";

export default function JobSeekerProfilePage() {
  const { user } = useUser();
  const [profile, setProfile] = useState(null);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    async function fetchProfile() {
      if (!user || !user.id) return;

      const response = await fetch("/api/job-seeker/profile", {
        headers: { userId: user.id },
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Fetched applications:", data.applications); // ✅ Debugging
        setProfile(data.profile);
        setApplications(data.applications);
      } else {
        console.error("Profile API error:", data.error);
      }
    }

    fetchProfile();
  }, [user]);

  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h1>Job Seeker Profile</h1>
      <p>
        <strong>Name:</strong> {profile.full_name}
      </p>
      <p>
        <strong>Email:</strong> {profile.email}
      </p>
      {profile.cv_url && (
        <p>
          <strong>CV:</strong>{" "}
          <a href={profile.cv_url} target="_blank">
            View CV
          </a>
        </p>
      )}

      <h2>My Applications</h2>
      {applications.length > 0 ? (
        <ul>
          {applications.map((job) => (
            <li key={job.id}>
              <p>
                <strong>{job.title}</strong> at {job.company}
              </p>
              <p>
                {job.location} | {job.salary} CZK | {job.job_contract}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No applications yet.</p>
      )}
    </div>
  );
}
