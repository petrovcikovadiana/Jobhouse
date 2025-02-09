"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useUser } from "@/app/context/UserContext";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { PiMoney } from "react-icons/pi";

export default function PostDetailPage() {
  const params = useParams(); // 🔹 Použití useParams() místo params.slug
  const router = useRouter();
  const { user } = useUser();
  const [post, setPost] = useState(null);
  const [applicants, setApplicants] = useState([]);
  const [applied, setApplied] = useState(false);

  useEffect(() => {
    if (!params?.slug) return; // Počkáme na načtení params
    async function fetchPost() {
      const response = await fetch(`/api/posts/${params.slug}`);
      const data = await response.json();
      setPost(data.post);
      setApplicants(data.applicants);
      setApplied(data.alreadyApplied);
    }
    fetchPost();
  }, [params?.slug]);

  const handleApply = async () => {
    if (!user || !user.id) {
      // 🔹 Kontrola, jestli je uživatel přihlášen
      alert("You must be logged in to apply.");
      return;
    }

    const response = await fetch("/api/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        userId: user.id, // 🔹 Zajištění, že userId je posíláno
      },
      body: JSON.stringify({ postId: post.id }),
    });

    if (response.ok) {
      setApplied(true);
      alert("Your application has been submitted!");
      router.refresh();
    } else {
      const errorData = await response.json();
      alert(errorData.message || "Something went wrong. Please try again.");
    }
  };

  if (!post) return <p>Loading...</p>;

  return (
    <article>
      <div className="detail-container">
        <div className="detail-header">
          <h1>{post.title}</h1>
          <p className="post-company">
            <HiOutlineBuildingOffice2 />
            {post.company}
          </p>
          <p>
            <IoLocationOutline /> {post.location}
          </p>
        </div>
        <img className="detail-img" src={post.image} alt={post.title} />
      </div>
      <p>
        <PiMoney />
        {new Intl.NumberFormat("cs-CZ").format(post.salary)} CZK
      </p>
      <p>
        <strong>Job Contract:</strong> {post.jobContract}
      </p>
      <p>{post.content}</p>

      {/* Job seeker tlačítko Apply */}
      {user?.role === "job_seeker" && !applied && (
        <button onClick={handleApply}>Apply</button>
      )}
      {user?.role === "job_seeker" && applied && (
        <p>You have already applied ✅</p>
      )}

      {/* Seznam uchazečů viditelný pouze pro zaměstnavatele */}
      {user?.role === "employer" && (
        <div>
          <h2>Applicants:</h2>
          {applicants.length > 0 ? (
            <ul>
              {applicants.map((applicant) => (
                <li key={applicant.id}>
                  <p>
                    <strong>{applicant.full_name}</strong> - {applicant.email}
                    {applicant.cv_url && (
                      <a
                        href={applicant.cv_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View CV
                      </a>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No applicants yet.</p>
          )}
        </div>
      )}
    </article>
  );
}
