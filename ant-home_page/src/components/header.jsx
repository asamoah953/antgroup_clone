import HeaderImage from '../assets/antgroup.png';
import { Link } from 'react-router-dom'
import React, { useState } from 'react';



function Header() {
    const [languages, setLanguages] = useState(false);

    return(
        <>
        <div className='header_bar'>
            <img src={HeaderImage} className='header_image'/>
            <Link to='#' className='all_links'><h3 className='about'>About Us</h3></Link>
            <Link to='#' className='all_links'><h3 className='business '>Business Development</h3></Link>
            <Link to='#' className='all_links'><h3 className='innovation'>Technological Innovation</h3></Link>
            <Link to='#' className='all_links'><h3 className='esg'>ESG</h3></Link>
            <Link to='#' className='all_links'><h3 className='news'>News & Media</h3></Link>
            <Link to='#' className='all_links'><h3 className='join'>Join Us</h3></Link>
            <div
  className="language-wrapper"
  onClick={()=>setLanguages(true)}
  // onMouseEnter={() => setLanguages(true)}
  // onMouseLeave={() => setLanguages(false)}
>
  <Link to="#" className="all_links">
    <h3 className="en">EN <span>&#9660;</span></h3>
  </Link>

  {languages && (
    <div className="languages_container">
      <h3 className="languages">languages are here</h3>
    </div>
  )}
</div>
        </div>
        </>
    )
}


export default Header;