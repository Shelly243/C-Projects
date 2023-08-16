import React from 'react'
import "./Footer.css"
import IEEELogo from "../../assets/ieeeLogo.svg"
import DITLogo from "../../assets/DitLogo.svg"
import { useNavigate } from 'react-router-dom'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    const navigate=useNavigate();
    const year=new Date().getFullYear();
    const moveToLinkedin=()=>{
        window.open("https://www.linkedin.com/company/ieeeditu/", "_blank");
    }

    const moveToInstagram=()=>{
        window.open("https://www.instagram.com/ieeeditu/", "_blank");
    }

    const moveToFacebook=()=>{
        window.open("https://www.facebook.com/ieeeditu", "_blank");
    }

    const moveToGithub=()=>{
        window.open("https://github.com/IEEE-DITU", "_blank");
    }

    const navigateToDevelopersPage=()=>{
        navigate("#");
    }

    return (
        <div className='footer'>
            <div className="footerIconLogo">
                <LinkedInIcon onClick={moveToLinkedin}/>
                <InstagramIcon onClick={moveToInstagram}/>
                <FacebookOutlinedIcon onClick={moveToFacebook}/>
                <GitHubIcon onClick={moveToGithub}/>
            </div>
            <div className="teamLink" onClick={navigateToDevelopersPage}>
                Design And Development team.
            </div>
            <div className="footerLogo">
                <img className='ieeeLogo' src={IEEELogo} alt="img not available" />
                <img className='ditLogo' src={DITLogo} alt="img not available" />
            </div>
            <div className="copyright">
                © IEEE Student Branch DIT University, {year}
            </div>
        </div>
    )
}

export default Footer
