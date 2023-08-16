import React /*,{ useState }*/ from 'react'
import './Eventspage.css'

/*import { useCollapse } from 'react-collapsed'*/


    /*const [isExpanded, setExpanded] = useState(false)
const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })*/

const EventsVerCard = ({
  imgURL,
  imgName,
  verCardTitle,
  verCardCoordinatorName,
  verCardSpeakerName,
  verCardDate,
  verCardContent,
}) => {
  return (
    <div>
        <div className="ver-card">
        {/*image*/}
        <img className="image" src= { imgURL } alt={ imgName } />
        {/*description*/}
        <div className="des">
          <h3>{ verCardTitle }</h3>
          <br />
          <h4>Coordinator: </h4><h5>{ verCardCoordinatorName }</h5>
          <h4>Speaker: </h4><h5>{ verCardSpeakerName }</h5>
          <h4>Date: </h4><h5>{ verCardDate }</h5>
          <br />
          <p>
          { verCardContent }
          {/*<section {...getCollapseProps()}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim veritatis adipisci molestias voluptas minima natus, provident suscipit laborum animi ad dolor laudantium assumenda repellat totam voluptate ut inventore exercitationem vero.
          </section>*/} 
          </p>
          <br />
          
          <div>
          {/*<button className='read-more-less-btn' {...getToggleProps({onClick: () => setExpanded((prevExpanded) => !prevExpanded),})}>
          {isExpanded ? 'Collapse' : 'Expand'}
  </button>*/}
        </div>
        </div>
    </div>
    </div>
  );
};

export default EventsVerCard
