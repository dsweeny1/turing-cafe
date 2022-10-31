import React from 'react'

const ResCard = ({ id, name, date, time, number }) => {
    return (
        <div className='card' id={id} key={id}>
            <h3 className="res-name">{name}</h3>
            <p className='res-date'>{date}</p>
            <p className='res-time'>{time} pm</p>
            <p className='res-guests'>Number of guests: {number}</p>
        </div>
    )
}

export default ResCard