"use client";
import { useEffect, useState } from "react";
import { useUser } from "@/app/context/UserContext";
import { useRouter } from "next/navigation";

export default function JobSeekerProfilePage() {
  const { user } = useUser();
  const router = useRouter();
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
    <div className="profile-container">
      <h1>Job Seeker Profile</h1>
      <div className="profile-info">
        <p>
          <strong>Name:</strong> {profile.name}
        </p>
        <p>
          <strong>Email:</strong> {profile.email}
        </p>
        {profile.cv_url && (
          <p>
            <strong>CV:</strong>{" "}
            <a href={profile.cv_url} target="_blank" rel="noopener noreferrer">
              View CV
            </a>
          </p>
        )}
      </div>

      <h2>My Applications</h2>
      {applications.length > 0 ? (
        <div className="applications-grid">
          {applications.map((job) => (
            <div
              key={job.id}
              className="job-card"
              onClick={() => router.push(`/feed/${job.id}`)} // ✅ Kliknutí přesměruje na detail nabídky
            >
              <h3>{job.title}</h3>
              <p>
                <strong>{job.company}</strong>
              </p>
              <p>{job.location}</p>
              <p>{new Intl.NumberFormat("cs-CZ").format(job.salary)} CZK</p>
              <p>{job.job_contract}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No applications yet.</p>
      )}
    </div>
  );
}
