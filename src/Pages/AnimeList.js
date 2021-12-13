import React, {Component} from 'react';
import "./AnimeList.css"

class AnimeList extends Component{
    constructor(){
        super();
        this.state={
            anime: null
        }
    }

    async componentDidMount(){
        const response = await fetch('https://api.jikan.moe/v3/top/anime/1/tv')
        const json= await response.json()
        this.setState({anime: json});
    }

    render(){
        return (
            <div className="animelist-container">
                <div className="top-heading">
                    <h1>AnimeList</h1>
                </div>
                <div className="list-filter">
                        <h3></h3>
                        <h3>RANK</h3>
                        <h3 id="title">TITLE</h3>
                        <h3>TYPE</h3>
                        <h3>EPISODES</h3>
                        <h3>RATING</h3> 
                    </div>
                <div className="list" >
                    {(this.state.anime)?this.state.anime.top.slice(0,20).map(anime => (
                        <div className="list-data">
                            <React.Fragment>
                                <p>{anime.rank}</p>
                                <p id="title1">{anime.title}</p>
                                <p>{anime.type}</p>
                                <p id="episode">{anime.episodes}</p>
                                <p id="rating">{anime.score}</p>
                            </React.Fragment>
                        </div>
                    )):null}
                </div>
            </div>
        )   
    }
}

export default AnimeList
