import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date } = props;
  return (
    <div className="my-3">
      <div className="card">
        <img src={imageUrl ? imageUrl : "data:image/png;base64,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"} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
          <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
