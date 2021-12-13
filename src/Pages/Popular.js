import React, {Component} from 'react';
import {AiFillPlayCircle} from 'react-icons/ai';
import './Popular.css';

class Popular extends Component{
    constructor(){
        super();
        this.state = {
            anime: null,
            manga: null
        };
    }   


    async componentDidMount() {
        await fetch("https://api.jikan.moe/v3/top/anime/1/tv")
          .then(response => response.json())
          .then(data => this.setState({ anime: data }))
        await fetch("https://api.jikan.moe/v3/top/manga/1")
          .then(response => response.json())
          .then(data => this.setState({ manga: data }))
    }
          
    render(){
        return (
            <div className="popular">
                <div className="popular-container">
                    <div className="headline">
                        <div className="heading">
                            <h2>OtakuWorld - Find Anime, Manga Online Subbed, Dubbed and more</h2>
                        </div>
                    </div>
                    <div className="popular-filter-1">
                        <h2>POPULAR ANIME 2021</h2>
                        <button className="all"><AiFillPlayCircle size="24px" /></button>
                    </div>
                    <div className="top-anime-cards">
                        {(this.state.anime)?this.state.anime.top.slice(16,32).map(anime => (
                        <div className="card">
                                <React.Fragment>
                                    <img src= {anime.image_url} />
                                    <h2 key={anime.rank}>{anime.title}</h2>
                                    <h3>{anime.start_date.slice(4)} . {anime.type}</h3>
                                </React.Fragment>
                        </div>
                        )):null}
                    </div>
                    <div className="popular-filter-2">
                        <h2>POPULAR MANGA 2021</h2>
                        <button className="all"><AiFillPlayCircle size="25px" /></button>
                    </div>
                    <div className="popular-anime-cards">
                        {(this.state.manga)?this.state.manga.top.slice(16,32).map(manga => (
                        <div className="card">
                                <React.Fragment>
                                    <img src= {manga.image_url} />
                                    <h2 key={manga.rank}>{manga.title}</h2>
                                    <h3>{manga.start_date.slice(4)} . {manga.type}</h3>
                                </React.Fragment>
                        </div>
                        )):null}
                    </div>
                </div>
            </div>
        )
    }
}

export default Popular;
