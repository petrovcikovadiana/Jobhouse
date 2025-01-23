import Link from "next/link";

import { DUMMY_NEWS } from "@/dommy-news";

export default function NewsPage() {
  return (
    <>
      <h1>News page</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((newsItem) => {
          return (
            <li key={newsItem.id}>
              <Link href={`/news/${newsItem.slug}`}>
                <img
                  src={`/images/news/${newsItem.image}`}
                  alt={newsItem.title}
                />
                <div className="news-header">
                  <span>{newsItem.title}</span>
                  <div className="news-info">
                    {" "}
                    <span>{newsItem.company}</span>
                    <span>{newsItem.location}</span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
