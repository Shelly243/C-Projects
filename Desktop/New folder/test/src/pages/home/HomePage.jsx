import React from 'react'
import "./HomePage.css"
import Image from "../../assets/Image.png"
import Create from "../../assets/Create.png"
import Learn from "../../assets/Learn.png"
import Succeed from "../../assets/Succeed.png"

function HomePage() {
  return (
    <div className='home'>

      <div className='dit-image'>
        <img src={Image} alt="My Image" />
      </div>

      <div className='heading'>
        <h1 className='hdg'>OUR OBJECTIVES</h1>
      </div>


      <div className='container1'>

        <img src={Create} alt="My Image" className='image1' />

        <div className='content1'>
          <h3 className='header'>CREATE</h3>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>




      <div className='container2'>

        <img src={Learn} alt="My Image" className='image2' />

        <div className='content2'>
          <h3 className='header2'>LEARN</h3>
          <p className='paragraph2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>


      <div className='container1' >

        <img src={Succeed} alt="My Image" className='image1' />

        <div className='content1' >
          <h3 className='header'>SUCCEED</h3>
          <p className='paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      

    </div>
  )
}

export default HomePage
