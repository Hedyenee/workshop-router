import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'


const Ratings = ({Rate}) => {
  return (
    <div>Rating


{console.log(Rate.rating)}
      {/* set initial value */}
      <Rating initialValue={Rate} allowHover={false} />
    </div>
  )
}

export default Ratings