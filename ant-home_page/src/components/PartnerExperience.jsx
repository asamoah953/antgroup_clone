import { Link } from 'react-router-dom'

function PartnerExperience({Bus, message, info}) {
    return(
        <>
            <h2 className="partner_heading">Cases from our Partners</h2>
        <div className="cases_container">
           
            <img src={Bus} alt="partner experience" className="bus"/>
            <h3>{message}</h3>
            <h4>{info}</h4>
            <Link className='bus_link'>more...</Link>


        </div>
        </>
    )
}

export default PartnerExperience;

