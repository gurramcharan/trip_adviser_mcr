import React from 'react'
import {useParams, Link} from 'react-router-dom'
import {data} from '../data/Data'
import {CardComponent} from '../components/CardComponent'

export const Places = () => {
    const {placesId, countryId} = useParams()
    const FilteredCountry = data
        .continents
        .filter((item) => item.id == countryId);
    const FilteredPlaces = FilteredCountry[0]
        .countries
        .filter((item) => item.id == placesId)

    return (
        <div>
            {FilteredPlaces.map((item) => (
                <div key={item.id}>
                    <h2>Top Destinations in {item.name}
                        for your next holiday</h2>
                    {item
                        .destinations
                        .map((item) => (
                            <div key={item.id}>
                                <Link to={`/placeDetail/${countryId}/${placesId}/${item.id}`}>
                                    <CardComponent item={item}/>
                                </Link>
                            </div>
                        ))}
                </div>
            ))}
        </div>
    )
}
