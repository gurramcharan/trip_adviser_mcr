import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data/Data'

export const PlaceDetail = () => {
    const {countryId,placesId,placeDetailId} = useParams()
    const FilteredPlace = data.continents.filter((item) => item.id == countryId)[0].countries.filter((item) => item.id == placesId)[0].destinations.filter((item) => item.id == placeDetailId)
  return (
    <div>
        {console.log(FilteredPlace)}
    </div>
  )
}
