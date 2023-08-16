import React from 'react'
import './Eventspage.css'

function EventsHoriCard() {
  return (
    <div>
        {/*cards */}
        <div className="hori-card">
            {/*image*/}
            <div className="image">
                <img src="https://picsum.photos/200/300" alt="image" />
            </div>
            {/*description*/}
            <div className="des">
                <h3>title Here</h3>
                <br />
                <h5>Coordinator</h5>
                <h5>Speaker</h5>
                <h5>Date</h5>
                <br />
                {/*button*/}
                {/*<a href='_blank' className="hori-card-btn">Read More</a>*/}
            </div>
        </div>
    </div>
  )
}

export default EventsHoriCard
