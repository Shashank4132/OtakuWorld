import React from 'react';
import './Watch.css';
import '../components/Section';


function Watch(props) {
    return (
        <div className="watch">
            <div className="watch-container">
                <div className="watch-top">
                    <div className="watch-top-left">
                        {console.log("watch",props.location)}
                        <img src= {props.location.state.data.images.jpg.image_url} />
                    </div>
                    <div className="watch-top-right">
                        <h2>  {props.location.state.data.title}</h2>
                        <h4>Type:  {props.location.state.data.type}</h4>
                        <h4>Episodes:  {props.location.state.data.episodes}</h4>
                        <h4>Rating:  {props.location.state.data.score}</h4>
                        <button>Watch Now</button><button id = "left-button">Add to list</button>
                        <p>Culpa ea ex adipisicing occaimsum sit culpa et adipisicing quis tempor aliqua mollit. Eiusmod ipsum quis amet adipisicing. Ipsum est mollit laboris cillum amet ad irure ullamco excepteur fugiat consectetur dolor ullamco do. In ex in enim eu nisi ipsum.</p>
                    </div>
                </div>
                <div className="bottom">
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watch
