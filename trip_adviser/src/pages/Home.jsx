import React from 'react'
import {data} from '../data/Data'
import {CardComponent} from '../components/CardComponent'
import {Link} from "react-router-dom"

export const Home = () => {
    return (
        <div>
            <h1 className='heading-center'>Welcome to Trip Advisor</h1>
            <h2 className='heading-center'>Top Continents for your next Holiday</h2>
            <div className='flex-row gap margin-one justify-content'>
                {data
                    .continents
                    .map((item) => (
                        <div key={item.id}>
                            <Link to={`/country/${item.id}`}>
                                <CardComponent item={item}/>
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    )
}
