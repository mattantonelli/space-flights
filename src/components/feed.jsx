import Post from "./post";

async function getData(url) {
  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error('There was a problem fetching the posts.');
  }

  return res.json();
}

export default async function Feed({ endpoint }) {
  const url = `https://api.spaceflightnewsapi.net/v4/${endpoint}`;
  const data = await getData(url);

  return (
    data.results.map((article) => {
      return (
        <div className="mb-2" key={article.id}>
          <Post data={article} />
        </div>
      )
    })
  )
}