import React from 'react'
import ResCard from '../ResCard/ResCard'

const ResContainer = ({ reservations }) => {
    const thisReservations = reservations.map(res => {
        return(
            <ResCard 
                name={res.name}
                date={res.date}
                time={res.time}
                number={res.number}
                key={res.id}
            />
        )
    })
    return(
        <div className='resy-container'>
            {thisReservations}
        </div>
    )
}

export default ResContainer