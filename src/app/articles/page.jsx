/* eslint-disable @next/next/no-img-element */

import Date from "@/components/date";

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
              <div className="card article mb-3" key={article.id}>
                <div className="row g-0">
                  <div className="col-4">
                    <img src={article.image_url} alt="" className="img-fluid rounded-start" />
                  </div>
                  <div className="col-8">
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title mb-0">{article.title}</h5>
                      <small className="mb-2">Published <Date dateString={article.published_at} /></small>
                      <p className="card-text">{article.summary}</p>
                      <a href={article.url} target="_blank" className="btn btn-primary">Read on {article.news_site}</a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}
