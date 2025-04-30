import HeaderImage from '../assets/antgroup.png';
import { Link } from 'react-router-dom'


function Header() {
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
            <Link to='#' className='all_links'><h3 className='en'>EN <span>&#9660;</span></h3></Link>

        </div>
        </>
    )
}


export default Header;