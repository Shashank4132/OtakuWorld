import React, {Component} from 'react';
import "./Section.css";
import {AiFillPlayCircle} from 'react-icons/ai';
import {Link} from 'react-router-dom';
import Watch from '../Pages/Watch';

class Section extends Component{
    constructor(){
        super();
        this.state = {
            anime: null,
            manga: null
        };
    }   

    async componentDidMount() { 
        await fetch("https://api.jikan.moe/v4/top/anime")
          .then(response => response.json())
          .then(data => this.setState({ anime: data.data }))
        await fetch("https://api.jikan.moe/v4/top/manga")
          .then(response => response.json())
          .then(data => this.setState({ manga: data.data }))
    }
    render(){
        return (
            <div className="section">
                <div className="section-container">
                    <div className="headline">
                        <div className="heading">
                            <h2>OtakuWorld - Find Anime, Manga Online Subbed, Dubbed and more</h2>
                        </div>
                    </div>
                    <div className="section-filter-1">
                        <h2>TRENDING ANIME 2021</h2>
                        <button className="all"><AiFillPlayCircle size="24px" /></button>
                    </div>
                    <div className="top-anime-cards">
                    {(this.state.anime)?this.state.anime.map(anime => (
                        <Link to={{pathname:'/watch' , state:{data:anime}}}>
                            <div className="card">
                                <React.Fragment>
                                    <img src= {anime.images.jpg.image_url} />
                                    <h2 key={anime.rank}>{anime.title}</h2>
                                    <br />
                                    <br />
                                    {/* <h3>{anime.start_date.slice(0,4)} . {anime.type}</h3> */}
                                </React.Fragment>
                            </div>
                        </Link>
                        )):null}
                        {/* {this.state.anime} */}
                        {console.log(this.state.anime)}
                    </div>
                    <div className="section-filter-2">
                        <h2>TOP MANGA 2021</h2>
                        <button className="all"><AiFillPlayCircle size="25px" /></button>   
                    </div>
                    <div className="popular-anime-cards">
                        {(this.state.manga)?this.state.manga.map(manga => (
                        <div className="card">
                                <React.Fragment>
                                    <img src= {manga.images.jpg.image_url} />
                                    <h2 >{manga.title}</h2>
                                    <br />
                                    <br />
                                    {/* <h3>{manga.start_date.slice(0,4)} . {manga.type}</h3> */}
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
