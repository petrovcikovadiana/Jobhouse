import { formatDate } from "@/lib/format";
import LikeButton from "./like-icon";
import Link from "next/link";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { IoLocationOutline } from "react-icons/io5";
import { PiMoney } from "react-icons/pi";

function Post({ post }) {
  return (
    <article className="post">
      <div className="post-content">
        <header>
          <div>
            <h2>
              <Link
                href={`/feed/${post.id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {post.title}
              </Link>
            </h2>{" "}
            {/* <p>
              Shared by {post.userEmail} on{" "}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p> */}
            <p className="post-company">
              {" "}
              <HiOutlineBuildingOffice2 /> {post.company}
            </p>
            <p>
              {" "}
              <IoLocationOutline /> {post.location}
            </p>
            <div className="skills">
              {" "}
              <p>
                {" "}
                <PiMoney /> {new Intl.NumberFormat("cs-CZ").format(
                  post.salary
                )}{" "}
                CZK
              </p>
              <p>{post.jobContract}</p>
            </div>
          </div>
          {/* <div>
            <LikeButton />
          </div> */}
        </header>
      </div>
      <div className="post-image">
        <img src={post.image} alt={post.title} />
      </div>
    </article>
  );
}

export default function Posts({ posts }) {
  if (!posts || posts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  );
}
