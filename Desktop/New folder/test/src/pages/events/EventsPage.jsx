import React from 'react'

/*import CardSlider  from './CardSlider'*/
import EventsVerCard from './EventsVerCard';
import { eventVerCardsContainer } from './Eventspagedata';

function EventsPage() {
  return (
        <div className="event-page-container">

            {/*content section*/}
            <h1>Explore IEEE Student Branch DITU</h1>
            
            <p className="event-content-section">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit tenetur perferendis obcaecati. Mollitia atque nulla pariatur iste nostrum nisi minus illo est! Nihil non quas alias commodi voluptas nemo dolorum.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque perferendis non cum, nulla tenetur eum repudiandae dolore similique consequuntur nisi adipisci! Pariatur aperiam dolorum cupiditate culpa ad quod modi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam distinctio incidunt explicabo amet ipsum porro consectetur in autem unde soluta possimus sint qui repellendus omnis, quaerat totam error. Doloribus, odit.
            </p>
            
          
            {/*event horizontal cards section*/}
            <center><h1>Workshop</h1></center>
             {/* <div className="event-hori-cards-container">
              <CardSlider /> {/card slider*}
            </div>*/}
            
         
            {/*event vertical cards section*/}
            <center><h1>Youthopia</h1></center>
            <div className="eventVerCardsContainer">
            {eventVerCardsContainer?.map((vercard, id) => {
                    return (
                    <div key={id}>
                      <EventsVerCard 
                      imgURL = {vercard.imgURL}
                      imgName = {vercard.imgName}
                      verCardTitle = {vercard.verCardTitle}
                      verCardCoordinatorName = {vercard.verCardCoordinatorName}
                      verCardSpeakerName = {vercard.verCardSpeakerName}
                      verCardDate = {vercard.verCardDate}
                      verCardContent = {vercard.verCardContent} 
                      />
                    </div>
                 );
                 })}
            </div>
        </div>
  );
}

