import HeaderImage from '../assets/antgroup.png'


function Header() {
    return(
        <>
        <div >
            <img src={HeaderImage} className='header_image'/>
            <h3 className='about'>About Us</h3>
            <h3 className='business '>Business Development</h3>
            <h3 className='innovation'>Technological Innovation</h3>
            <h3 className='esg'>ESG</h3>
            <h3 className='news'>News & Media</h3>
            <h3 className='join'>Join Us</h3>
            <h3 className='en'>EN <span>&#9660;</span></h3>

        </div>
        </>
    )
}


export default Header;