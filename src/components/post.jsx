/* eslint-disable @next/next/no-img-element */

import Date from "@/components/date";
import styles from "./blog.module.scss";

export default function Post({ data }) {
  return (
    <div className={`card ${styles.post}`}>
      <div className="row g-0">
        <div className="col-4">
          <img src={data.image_url} alt="" className="img-fluid rounded-start" />
        </div>
        <div className="col-8">
          <div className={`card-body d-flex flex-column ${styles.postBody}`}>
            <h5 className="card-title mb-0">{data.title}</h5>
            <small className="mb-2">Published <Date dateString={data.published_at} /></small>
            <p className="card-text">{data.summary}</p>
            <a href={data.url} target="_blank" className="btn btn-primary">Read on {data.news_site}</a>
          </div>
        </div>
      </div>
    </div>
  )
}