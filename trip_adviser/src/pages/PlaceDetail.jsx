import React from 'react'
import {useParams} from 'react-router-dom'
import {data} from '../data/Data'

export const PlaceDetail = () => {
    const {countryId, placesId, placeDetailId} = useParams()
    const FilteredPlace = data
        .continents
        .filter((item) => item.id == countryId)[0]
        .countries
        .filter((item) => item.id == placesId)[0]
        .destinations
        .filter((item) => item.id == placeDetailId)
    return (
        <div>
            {FilteredPlace.map((item) => (
                <div key={item.id}>
                    <div className='heading-center'>
                        <h1>{item.name}</h1>
                    </div>
                    <div className='flex-row gap justify-content align-items margin-one'>
                        <div>
                            <img src={item.image} alt={item.name} width="400px" />
                        </div>
                        <div>
                            <p><b className='color-blue'>Description: </b>{item.description}</p>
                            <p><b className='color-blue'>Ratings: </b>{item.ratings}</p>
                            <p><b className='color-blue'>Reviews: </b>{item.reviews}</p>
                            <p><b className='color-blue'>Location: </b>{item.location}</p>
                            <p><b className='color-blue'>Opening Hours: </b>{item.openingHours}</p>
                            <p><b className='color-blue'>Ticket Price: </b>{item.ticketPrice}</p>
                            <p><a style={{textDecoration:"none", color:"orange"}} href={item.website}>Website</a></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
