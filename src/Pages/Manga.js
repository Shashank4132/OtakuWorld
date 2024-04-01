import React, {Component} from 'react';
import "./Manga.css";

class Section extends Component{
    constructor(){
        super();
        this.state = {
            anime: null
        };
    }   

    async componentDidMount(){
        const response = await fetch(`https://api.jikan.moe/v4/top/manga`)
        const json = await response.json()
        this.setState({anime: json});
    }
    render(){
        return (
            <div className="manga">
                <div className="manga-container">
                    <div className="manga-filter-1">
                        <h2>TRENDING MANGA 2021</h2>
                        {/* <button className="all"><AiFillPlayCircle size="24px" /></button> */}
                    </div>
                    <div className="top-anime-cards">
                        {(this.state.anime)?this.state.anime.top.slice(0,16).map(anime => (
                        <div className="card">
                                <React.Fragment>
                                    <img src= {anime.image_url} />
                                    <h2 key={anime.rank}>{anime.title}</h2>
                                    <h3>{anime.start_date.slice(4)} . {anime.type}</h3>
                                </React.Fragment>
                        </div>
                        )):null}
                    </div>
                    <div className="manga-filter-2">
                        <h2>TOP MANGA 2021</h2>
                        {/* <button className="all"><AiFillPlayCircle size="25px" /></button> */}
                        {/* <button className="other"><AiOutlineMenu /> Day </button>
                        <button className="other"><AiOutlineMenu /> Week</button>
                        <button className="other"><AiOutlineMenu /> Month </button> */}
                    </div>
                    <div className="popular-anime-cards">
                        {(this.state.anime)?this.state.anime.top.slice(16,48).map(anime => (
                        <div className="card">
                                <React.Fragment>
                                    <img src= {anime.image_url} />
                                    <h2 key={anime.rank}>{anime.title}</h2>
                                    <h3>{anime.start_date.slice(4)} . {anime.type}</h3>
                                </React.Fragment>
                        </div>
                        )):null}
                    </div>
                </div>
            </div>
        )
    }
}

export default Section;
