"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useUser } from "@/app/context/UserContext";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { PiMoney } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";

export default function PostDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { user } = useUser();
  const [post, setPost] = useState(null);
  const [applicants, setApplicants] = useState([]);
  const [applied, setApplied] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    if (!params?.slug) return;
    async function fetchPost() {
      console.log("Frontend - Fetching post for slug:", params.slug);

      const response = await fetch(`/api/posts/${params.slug}`);
      const data = await response.json();
      console.log("Frontend - Fetched Post Data:", data.post); // ✅ Kontrola API odpovědi

      setPost(data.post);
      setApplicants(data.applicants);
      setApplied(data.alreadyApplied);
    }
    fetchPost();
  }, [params?.slug]);

  if (!post) return <p>Loading...</p>;

  function safeParse(jsonString) {
    try {
      return jsonString && typeof jsonString === "string"
        ? JSON.parse(jsonString)
        : [];
    } catch (error) {
      console.error("❌ JSON parse error:", error, "Input:", jsonString);
      return [];
    }
  }

  const requirements = safeParse(post.requirements);
  const skills = safeParse(post.skills);
  const benefits = safeParse(post.benefits);
  const languages = Array.isArray(post.languages)
    ? post.languages
    : safeParse(post.languages);
  console.log("✅ Backend - Parsed Languages:", post.languages);

  return (
    <article className="detail-container">
      <div className="detail-content">
        <h2>{post.title}</h2>
        <div className="detail-header">
          <p>
            <IoLocationOutline /> {post.location}
          </p>
          <span>|</span>
          <p>
            <PiMoney />
            {new Intl.NumberFormat("cs-CZ").format(post.salary)} CZK
          </p>
          <span>|</span>
          <p>{post.jobContract || "Not specified"}</p>
          <span>|</span>
          <p>{post.seniority}</p>
        </div>
        <p>
          <strong>Languages:</strong>{" "}
          {Array.isArray(languages) && languages.length > 0
            ? languages.join(", ")
            : "Not specified"}
        </p>

        <p>
          <strong>Technology:</strong> {post.technology}
        </p>
        <p>
          <strong>About Position:</strong> {post.content}
        </p>

        {requirements.length > 0 && (
          <div>
            <h3>Job Requirements</h3>
            <ul>
              {requirements.map((req, index) => (
                <li key={index}>
                  <GoDotFill />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        )}

        {skills.length > 0 && (
          <div>
            <h3>Skills / Qualifications</h3>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>
                  {" "}
                  <GoDotFill />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        )}

        {benefits.length > 0 && (
          <div>
            <h3>Benefits</h3>
            <ul>
              {benefits.map((benefit, index) => (
                <li key={index}>
                  {" "}
                  <GoDotFill />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        )}

        {user?.role === "job_seeker" && !applied && (
          <button className="apply-btn" onClick={() => setShowModal(true)}>
            Apply
          </button>
        )}
        {user?.role === "job_seeker" && applied && (
          <p>You have already applied ✅</p>
        )}
      </div>

      {/* ✅ Sidebar */}
      <div className="detail-sidebar">
        <img className="detail-img" src={post.image} alt={post.title} />
        <p className="post-company">
          <HiOutlineBuildingOffice2 /> {post.company}
        </p>
        <div className="sidebar-info">
          <h3>Job Information</h3>
          <p>
            <strong>Location:</strong> {post.location}
          </p>
          <p>
            <strong>Salary:</strong>{" "}
            {new Intl.NumberFormat("cs-CZ").format(post.salary)} CZK
          </p>
          <p>
            <strong>Job Contract:</strong> {post.jobContract || "Not specified"}
          </p>
          <p>
            <strong>Seniority:</strong> {post.seniority}
          </p>
        </div>
      </div>
    </article>
  );
}
