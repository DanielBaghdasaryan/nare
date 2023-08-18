import React, { useState, useEffect } from 'react'
import "./Kino.css"
import kinoner from './../../kinoner'
import { useParams } from 'react-router-dom'


const Kino = () => {
    const { kino } = useParams();

    const film = kinoner.find(info => info.link === kino);

    return (
        <div>
            <h1 className='film_title'>{film.name}</h1>
            <div className="film_actors">
                {film.actors.map((actor, index) => (
                    <div className="actor" key={index}>
                        <div className="film_img">
                            <img
                                src={actor.image}
                                className={actor.image.width > actor.image.height ? 'landscape' : 'portrait'}
                                alt=""
                            />
                        </div>
                        <div className="film_name">{actor.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Kino
