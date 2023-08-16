import React from 'react'
import "./AboutPage.css"
import upImage from "../../assets/aboutImg.png"

function AboutPage() {
  return (
    <div className='about'>
      <div className="upImage">
        <img className='abtImg' src={upImage} alt="" />
      </div>
      <div className="contentAbt">

        <h1>About IEEE</h1>
        <p>IEEE (Institute of Electrical and Electronics Engineers) is a non-profit organization and is the world's leading professional association for the advancement of technology. IEEE Student Branch gives students the opportunity to meet and learn from fellow students, as well as faculty members and professionals in the field.<br/><br/>

          IEEE and it's members inspire a global community through IEEE's highly cited publications, conference, technology, standards, and professional and educational activities.</p>



        <h1>Mission Statement</h1>
        <p>IEEE's core purpose is to foster technological innovation and excellence for the benefits of humanity.<br/><br/>

          The IEEE promotes the engineering process of creating, developing, integrating, sharing and applying knowledge about Electro and Information Technologies and Sciences for the benefit of humanity and the profession.</p>



        <h1>Vision Statement</h1>
        <p>IEEE will be essential to the global technical community and to technical professionals everywhere, and be universally recognized for the contribution of technology and of technical professionals in improving global conditions. The IEEE is engaged in an enterprise-wide strategic planning process. A summary of the long-range strategic plan, termed the IEEE Envisioned Future, details the main elements of the plan.</p>



        <h1>About DIT University Student Branch</h1>
        <p>IEEE Student Branch DIT Univarsity believes in these values of IEEE. We are an enthusiastic community of like-minded envisioners who strive to advance technological innovations and uphold the ethos of IEEE.
          Gallery IEEE-DIT</p>

      </div>
    </div>
  )
}

export default AboutPage
