"use client";

import { useState } from "react";
import Post from "./post";

async function getData(url) {
  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error('There was a problem fetching the posts.');
  }

  return res.json();
}

export default function InfiniteFeed({ endpoint }) {
  const [posts, setPosts] = useState([]);
  const [nextUrl, setNextUrl] = useState(`https://api.spaceflightnewsapi.net/v4/${endpoint}/?limit=10&offset=10`)

  async function fetchNext() {
    const data = await getData(nextUrl);
    setPosts(posts.concat(data.results));
    setNextUrl(data.next);
  }

  return (
    <>
      {posts.map((post) => {
        return (
          <div className="mb-2" key={post.id}>
            <Post data={post} />
          </div>
        )
      })}
      <div className="text-center my-3">
        <button className="btn btn-secondary" onClick={() => fetchNext()}>Load More</button>
      </div>
    </>
  )
}