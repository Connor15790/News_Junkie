import React, {useEffect, useState} from 'react'
import Spinner from './Spinner'
import NewsItem from './NewsItem';
import PropTypes from 'prop-types'
import Logo from './Logo';
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, settotalResults] = useState(0);
    // document.title = `INFO Junkie - ${props.category[0].toUpperCase() + props.category.substring(1)}`

    const updateNews = async ()=> {
        let url = `https://newsapi.org/v2/top-headlines?&category=${props.category}&country=${props.country}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        settotalResults(parsedData.totalResults);
        setLoading(false);  
    }

    useEffect(()=> {
        updateNews();
        // eslint-disable-next-line
    }, [])

    // const onPrevClick = async () => {
    //   this.setState({ page: this.state.page - 1 });
    //   this.updateNews();
    // }

    // const onNextClick = async () => {
    //   this.setState({ page: this.state.page + 1 });
    //   this.updateNews();
    // }

    const fetchMoreData = async ()=> {
        let url = `https://newsapi.org/v2/top-headlines?&category=${props.category}&country=${props.country}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        settotalResults(parsedData.totalResults);
    }
        const capitalize = () => {
        let word = props.category;
        let capitalized = word[0].toUpperCase() + word.substring(1);

        return capitalized;
        }

    return (
      <div className='container my-3 marginleft-5'>
        <Logo />
        <p className='mt-5' style={{ textAlign: "center", fontSize: 40, fontWeight: "bolder" }}>Daily Top {capitalize()} Headlines</p>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="row">
            {articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} />
              </div>
            })}
          </div>
        </InfiniteScroll>
        {/* <div className="container d-flex justify-content-around my-5">
          <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.onPrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / props.pageSize)} className="btn btn-dark" onClick={this.onNextClick}>Next &rarr;</button>
        </div> */}
      </div>
    )
}

News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general"
  }

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

export default News
