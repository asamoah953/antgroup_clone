function PartnerExperience({Bus, message, info}) {
    return(
        <>

        <div className="cases_container">
           
            <img src={Bus} alt="partner experience" className="bus"/>
            <h3>{message}</h3>
            <h4>{info}</h4>


        </div>
        </>
    )
}

export default PartnerExperience;

