import HeaderImage from '../components/header';
import DigitalPayment from '../components/DigitalPaymentImage';
import BodyInfo from '../components/BodyInfo';
import PartnerExperience from '../components/PartnerExperience';
import Bus from '../assets/bus.webp';
import Bank from '../assets/bank.webp'




function Home() {
    return(
        <>

     
        <div className='header_container'>
            < HeaderImage/>
            < DigitalPayment />
        </div>

        <BodyInfo />

        <PartnerExperience Bus={Bus} message="Hangzhou pioneered the use of QR code payments for bus fares" info="Bus and subway setworks in more than 200 cities, including Beiing,..."/>
        <PartnerExperience Bus={Bank} message="Fuzhou's first credit payment for medical services" info="Paying medical bills and skipping hospital queues with one click"/>
 

        </>
    )
}


export default Home;