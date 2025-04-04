import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <>
        <div className="nav_bar">

                


            <Link to='/payment' className='all_links'><h3 className="payment">Digital Payment</h3></Link>
            <Link to='/connectivity' className='all_links'><h3 className="connectivity">Digital Connectivity</h3></Link>
            <Link to='/finance' className='all_links'><h3 className="finance">Digital Finance</h3></Link>
            <Link to='/digital' className='all_links'><h3 className="tech">Digital Technologies</h3></Link>
            <Link to='/global' className='all_links'><h3 className="global">Globalization</h3></Link>
        </div>

        </>
    )
}

export default Navbar;
