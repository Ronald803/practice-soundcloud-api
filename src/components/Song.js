import React from 'react';

const Song = (props) => {
    console.log(props.songName,props.urlLink);
    return (
        <div className='card bg-dark'>
            <div className='card-header text-light text-center'>
                {props.songName}
            </div>
            <div className='' >
                <div className='mx-3'>
                    <img className='d-block w-100' src='../img/album.jpg' alt="album photo"/>
                </div>
            </div>
            <div className='card-body'>
                <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay"
                src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${props.urlLink}&amp;show_artwork=false&sharing=false&buying=false&color=000000`}>
                </iframe>
            </div>
        </div>
    );
}

export default Song;


