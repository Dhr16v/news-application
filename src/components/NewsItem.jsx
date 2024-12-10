import { Component } from "react";



export class NewsItem extends Component {

 
  render() {
    const { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <h5 className="card-title" style={{ textAlign: "center" }}>
            {title}
          </h5>
          <img
            src={
              !imageUrl
                ? "https://images.macrumors.com/t/NX26og8080ks3W9arnuZHIaVY1A=/2500x/article-new/2024/07/Flip-iPhone-Thumb-2.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="news"
          />
          <div className="card-body">
            <p className="card-text">{description}</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
