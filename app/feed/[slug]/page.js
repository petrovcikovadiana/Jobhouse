import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/posts";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { PiMoney } from "react-icons/pi";

export default async function PostDetailPage({ params }) {
  const { slug } = params;

  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      {" "}
      <div className="detail-container">
        {" "}
        <img className="detail-img" src={post.image} alt={post.title} />
        <div className="detail-header">
          <h1>{post.title}</h1>
          <p>
            <HiOutlineBuildingOffice2 />
            {post.company}
          </p>
          <p>
            <IoLocationOutline /> {post.location}
          </p>
        </div>
      </div>
      <p>
        <PiMoney />
        {new Intl.NumberFormat("cs-CZ").format(post.salary)} CZK
      </p>
      <p>
        <strong>Job Contract:</strong> {post.jobContract}
      </p>
      <p>{post.content}</p>
    </article>
  );
}
