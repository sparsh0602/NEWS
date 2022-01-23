import React, { Component } from 'react'
import Loading from './Loading';
export default class NewsCard extends Component {


    static defaultProps = {
        category: 'general',
    }
    articles = []
    constructor(props) {
        super(props);
        this.state = {
            article: this.articles,
            page: 1,
            totalResult: 0,
            load: false
        }
        document.title = `${this.props.category !== 'General' ? this.props.category + "-" : ""}AnytimeNews`
    }

    async updateInfo() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=895a6bc4e93440c58ccadbe89ed3b878&page=${this.state.page}&pagesize=10&category=${this.props.category}`;
        this.setState({ load: true });
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            article: parseData.articles,
            load: false
        });

    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=895a6bc4e93440c58ccadbe89ed3b878&pagesize=10&category=${this.props.category}`;
        this.setState({ load: true });
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ article: parseData.articles, totalResult: parseData.totalResults, load: false })
    }

    handlePrevClick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.updateInfo();
    }

    handleNextClick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.updateInfo();
    }
    render() {



        return (
            <div>
                <h1 className="topHeadline">{this.props.category === "general" ? "HEADLINES" : this.props.category.toUpperCase()}</h1>
                {this.state.load && <Loading />}
                <div className={"Cards"}>
                    {this.state.article.map((element) => {
                        return <div className={`card newsCard ${this.props.mode==='light'?"":"darkCard"}`} key={element.url}>

                            <img src={element.urlToImage ? element.urlToImage : "src/components/randomPic.png"} className="card-img-top" alt="..." />

                            <div className="card-body">

                                <h5 className="card-title">{element.title ? element.title.slice(0, 50) : " "}...
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {element.source.name}</span></h5>
                                <p className="card-text cardText">{element.description ? element.description.slice(0, 90) : " "}...</p>
                                <p className="card-text"><small className="text-muted">Last updated on {element.publishedAt.slice(0, 10)}</small></p>
                            </div>
                            <div className="buttonDiv">
                                <a className="readMoreButton" target="_blank" href={element.url}>ReadMore</a>

                            </div>
                            

                        </div>

                    })}

                </div>

                <div className="btn-group arrowButtons" role="group" aria-label="Basic example">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-primary prevNextButton">&#8592; Previous</button>

                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / 10)} className="btn btn-primary prevNextButton" onClick={this.handleNextClick}>Next &#8594;</button>
                </div>
            </div>
        )
    }
}
