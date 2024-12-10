import { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';


export class News extends Component {

  static defaultProps={
    country:"in",
    pagesize:8,
    category:"general"
  }

  static propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string
  }


  constructor() {
    super();
    console.log("hello");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }

  async componentDidMount() {
    console.log("cdm");
    try {
      let url =
        `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=37d3543652c04e6ab467e6d6602f28c0&page=1&pagesize=${this.props.pagesize}`;
        this.setState({loading:true})
      let data = await fetch(url);
      let parseData = await data.json();
      console.log(parseData);
      this.setState({ 
        articles: parseData.articles,
        totalResults:parseData.totalResults,
        loading:false
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  handlePreviousclick = async () => {
    console.log("previous");
    if (this.state.page > 1) {
      try {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=37d3543652c04e6ab467e6d6602f28c0&page=${
          this.state.page - 1
        }&pagesize=${this.props.pagesize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
          page: this.state.page - 1,
          articles: parseData.articles,
          loading:false
        })
      } catch (error) {
        console.error("Error fetching previous page:", error);
      }
    }
  }

  handleNextclick = async () => {
    console.log("next");

      try {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=37d3543652c04e6ab467e6d6602f28c0&page=${
          this.state.page + 1
        }&pagesize=${this.props.pagesize}`
        this.setState({loading:true});
        let data = await fetch(url);
        let parseData = await data.json();
        
        this.setState({
          page: this.state.page + 1,
          articles: parseData.articles,
          loading:false
        });
      } catch (error) {
        console.error("Error fetching next page:", error);
      }
    
  
  }

  render() {
    return (
      <div className="container my-3">
        <h2 style={{ textAlign: "center",margin:"15px",background:"orange",color:"white",padding:"5px",border:"10px 10px" }}>NewsMonkey Top Headlines</h2>
        <h2 style={{textAlign:"center"}}>{this.state.loading&&<Spinner/>}</h2>

        <div className="row my-5">
          {!this.state.loading&&this.state.articles.map((element) => {
            return (
              <div className="col-md-3" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 50) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousclick}
          >
            &laquo; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextclick}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
