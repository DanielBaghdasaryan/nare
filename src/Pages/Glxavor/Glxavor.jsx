import React from 'react'
import "./Glxavor.css"

import { Link } from 'react-router-dom'

import kinoner from './../../kinoner'


const Glxavor = () => {

    

    return (
        <div className='kinoner'>
            {
                kinoner.map(({name, link, image, date}, index) => (
                    <div key={index} className='film'>
                        <div className='img'>
                            <img src={image} alt="" />
                            <div className="tvakan">{date}</div>
                        </div>
                        <div className="info">
                            <div className="anun">
                                {name}
                            </div>
                            <Link to={`/kino/${link}`} className='button'>
                              Կարդալ ավելին
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Glxavor
