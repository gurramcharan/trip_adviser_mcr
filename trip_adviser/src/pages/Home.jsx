import React from 'react'
import {data} from '../data/Data'
import {CardComponent} from '../components/CardComponent'
import {Link} from "react-router-dom"

export const Home = () => {
    return (
        <div>
            <h1>Welcome to Trip Advisor</h1>
            <h2>Top Continents for your next Holiday</h2>
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
    )
}
