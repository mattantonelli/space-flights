import Post from "@/components/post";

export const metadata = {
  title: 'Space Flights - Articles'
}

async function getData() {
  const res = await fetch('https://api.spaceflightnewsapi.net/v4/articles', { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error('There was a problem fetching the articles.');
  }

  return res.json();
}

export default async function Articles() {
  const data = await getData();

  return (
    <>
      <h1>Articles</h1>
      <div className="row">
        <div className="col-8 offset-2">
          {data.results.map((article) => {
            return (
              <div className="mb-2" key={article.id}>
                <Post data={article} />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
