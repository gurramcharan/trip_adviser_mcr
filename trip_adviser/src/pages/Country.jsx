import React from 'react'
import {useParams, Link} from 'react-router-dom'
import {data} from '../data/Data';
import {CardComponent} from '../components/CardComponent';

export const Country = () => {
    const {countryId} = useParams();
    const FilteredCountry = data
        .continents
        .filter((item) => item.id == countryId);
    return (
        <div>
            {FilteredCountry.map((item) => (
                <div key={item.id}>
                    <h2 className='heading-center'>Top Countries in {item.name}
                        for your next holiday</h2>
                    <div className='flex-row gap margin-one justify-content'>
                        {item
                            .countries
                            .map((country) => (
                                <div key={country.id}>
                                    <Link to={`/places/${countryId}/${country.id}`}>
                                        <CardComponent item={country}/>
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    )
}
